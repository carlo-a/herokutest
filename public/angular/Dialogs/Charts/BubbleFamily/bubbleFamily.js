/* Line Family MODULE */
app.controller('BubbleFamilyController_orig', function ($scope, $mdDialog, callstate, DataFactory, $filter, svg) {
    //Variables
    $scope.SVG = svg;// .SVG;               //getting svg items from config
    $scope.callstate = callstate;           //create state or update state of modal
    $scope.modalTitle = "";                 //determines Create or Update
    $scope.formLoad = false;                //Load State

    //Raw Data
    $scope.originalData = undefined;        //raw data from webservice & Variable for Factory Processing [DataFactory.GenerateTabularRawSeries(obj,obj,obj) - 3rd argument]
    $scope.originalDataKeys = [];           //Keys derived from raw data (originalData)

    //Step 2 Table Paginations
    $scope.tcol = 5;
    $scope.trow = 5;
    $scope.colpage = 0;
    $scope.rowpage = 0;

    //Step 4 Table Paginations
    $scope.grow = 2;
    $scope.growpage = 0;

    //Data for Highcharts
    $scope.graphdata = {};


    //Steps Validation
    $scope.validation = {
        current: "one",
        url: false,
        urlChanged: false,
        widgetCharacteristics: false,
        formatData: function () {
            if ($scope.type_info.type == 'Bubble') {
                if ($scope.tabulardata.rows.length > 0 && $scope.tabulardata.columns.x.length != 0 && $scope.tabulardata.columns.y.length != 0 && $scope.tabulardata.columns.z.length != 0) {
                    $scope.validation.current = "four";
                    return true;
                }
                else {
                    $scope.validation.current = "three";
                    return false;
                }
            }
            else {
                if ($scope.tabulardata.rows.length > 0 && $scope.tabulardata.columns.x.length != 0 && $scope.tabulardata.columns.y.length != 0) {
                    $scope.validation.current = "four";
                    return true;
                }
                else {
                    $scope.validation.current = "three";
                    return false;
                }
            }
        },
    }

    //Variable for Plot Band Mgt
    $scope.plotBand = {
        axis: 'x',
        rotation: 0,
        from: 0,
        to: 0,
        color: "#CCC",
        text: "Sample Plot Band",

        //defaults
        textAlign: 'center',
    }

    //Variable for Plot Line Mgt
    $scope.plotLine = {
        value: 0,
        width: 1,
        axis: 'x',
        color: "#CCC",
        dashStyle: 'Solid',
        text: 'Sample PlotLine',
        verticalAlign: 'Top',                 //top-middle-bottom,
        rotation: 0,

        //defaults
        textAlign: 'center',
        align: 'center'
    }


    //Variable for Factory Processing [DataFactory.GenerateTabularRawSeries(obj,obj,obj) - 2nd argument]
    $scope.tabulardata = {
        label: "",
        rows: [],
        columns: {
            x: "",
            y: "",
            z: "",
            name: ""
        },
        color: [],
        dashStyle: [],
        lineWidth: [],
        symbol: [],
        radius: [],
    };

    //Variables for DB
    $scope.refresh_info = {
        url: "json/rdata.php",
        method: "GET",
        intervalType: "Seconds",
        intervalUnit: 10.0,
        intervalvalue: 0,
    };
    $scope.widget_info = {
        name: "Widget Title",
        header: true,
    }
    $scope.data_info = {
        format: "tabular",
        tabular: {
            label: "",
            indices: {
                rows: [],
                columns: []
            }
        }
    }
    $scope.type_info = {
        type: 'Bubble',
        xname: "X",
        yname: "Y",
        zname: "Radius",
        id: "hcid",
        categories: [],
        plotBands: {
            x: [],
            y: []
        },
        plotLines: {
            x: [],
            y: []
        }
    }

    //Methods
    $scope.GetIndexOf = function (o) {
        //Determines o's index in raw data
        return $scope.originalData.indexOf(o);
    }
    $scope.GetGraphIndexOf = function (o) {
        //Determines o's index in processed data of selected rows
        return $scope.tabulardata.rows.indexOf(o);
    }
    $scope.ToMS = function (interval, type) {
        //Time Converter
        var converted;
        switch (type) {
            case "Second":
            case "Seconds":
                converted = interval * 1000;
                break;
            case "Minute":
            case "Minutes":
                converted = interval * 60000;
                break;
            case "Hour":
            case "Hours":
                converted = interval * 3600000;
                break;
        }
        return converted;
    }
    $scope.URLChange = function () {
        //Triggers when Step 1 has changed
        $scope.validation.urlChanged = true;
        $scope.validation.url = false;
        $scope.validation.widgetCharacteristics = false;
        $scope.validation.current = 'one';
    }
    $scope.WidgetCharacteristicsChange = function () {
        //Triggers when Step 2 has changed
        $scope.validation.widgetCharacteristics = false;
        $scope.validation.current = "two";
    }
    $scope.CreateModalTitle = function () {
        //Creates the Modal Title depending on callstate [update || create]
        switch (callstate) {
            case "create": $scope.modalTitle = "Create Widget"; break;
            case "update": $scope.modalTitle = "Reconfigure your Widget"; break;
            default: $scope.modalTitle = "You did something wrong.";
        }
    }

    //Togglers
    $scope.ChangeDataKey = function (key) {
        //Change label name for graph plotting
        if ($scope.tabulardata.label == '') {
            $scope.tabulardata.columns.name = key;
            $scope.tabulardata.label = key;
            $scope.originalDataKeys.splice($scope.originalDataKeys.indexOf(key), 1)
        } else {
            $scope.originalDataKeys.splice($scope.originalDataKeys.indexOf(key), 1)
            $scope.originalDataKeys.push($scope.tabulardata.label);
            $scope.tabulardata.label = key;
        }
    }
    $scope.CheckSelectedData = function (obj) {
        //Checks if obj is existing in selected rows
        if ($scope.tabulardata.rows.indexOf(obj) == -1) return false;
        else return true;
    }
    $scope.ToggleSelectedData = function (obj) {
        //Push|Pop obj in|from selected rows
        var key = $scope.tabulardata.rows.indexOf(obj);
        if (key == -1) {
            $scope.tabulardata.rows.push(obj);
            $scope.tabulardata.color.push("");
            $scope.tabulardata.symbol.push("");
            $scope.tabulardata.radius.push(4);
        }
        else {
            $scope.tabulardata.rows.splice(key, 1);
            $scope.tabulardata.color.splice(key, 1);
            $scope.tabulardata.symbol.splice(key, 1);
            $scope.tabulardata.radius.splice(key, 1);
        }
        $scope.GenerateHighchart();
    }
    $scope.CheckSelectedKey = function (obj) {
        //Checks if obj is existing in selected columns
        if ($scope.type_info.type.toLowerCase() == 'bubble') {
            return obj == $scope.tabulardata.columns.x || obj == $scope.tabulardata.columns.y || obj == $scope.tabulardata.columns.z;
        }
        else {
            return obj == $scope.tabulardata.columns.x || obj == $scope.tabulardata.columns.y;
        }
    }
    $scope.ToggleSelectedKey = function (obj) {
        //Push|Pop obj in|from selected columns
        var key = $scope.tabulardata.columns.indexOf(obj);
        if (key == -1) {
            if ($scope.tabulardata.columns.length < 3) {
                $scope.tabulardata.columns.push(obj);
            }
        }
        else {
            $scope.tabulardata.columns.splice(key, 1);
        }
        $scope.GenerateHighchart();
    }

    //PlotBands Managers
    $scope.AddPlotBand = function () {
        //Adds Plot Band
        if ($scope.plotBand.axis == 'x') {
            $scope.type_info.plotBands.x.push($scope.plotBand);
        } else {
            $scope.type_info.plotBands.y.push($scope.plotBand);
        }
        $scope.plotBand = {
            axis: 'x',
            rotation: 0,
            from: 0,
            to: 0,
            color: "#CCC",
            text: "Sample Plot Band",

            //defaults
            textAlign: 'center',
        }
        $scope.GenerateHighchart();
    }
    $scope.RemovePlotBand = function (o) {
        if (o.axis == 'x') {
            var i = $scope.type_info.plotBands.x.indexOf(o);
            $scope.type_info.plotBands.x.splice(i, 1);
        } else {
            var i = $scope.type_info.plotBands.y.indexOf(o);
            $scope.type_info.plotBands.y.splice(i, 1);
        }
        $scope.GenerateHighchart();
    }

    //PlotBands Managers
    $scope.AddPlotLine = function () {
        //Adds Plot Line
        if ($scope.plotLine.axis == 'x') {
            $scope.type_info.plotLines.x.push($scope.plotLine);
        } else {
            $scope.type_info.plotLines.y.push($scope.plotLine);
        }
        $scope.plotLine = {
            value: 0,
            width: 1,
            axis: 'x',
            color: "#CCC",
            dashStyle: 'Solid',
            text: 'Sample PlotLine',
            verticalAlign: 'Top',                 //top-middle-bottom,
            rotation: 0,

            //defaults
            textAlign: 'center',
            align: 'center'
        }
        $scope.GenerateHighchart();
    }
    $scope.RemovePlotLine = function (o) {
        if (o.axis == 'x') {
            var i = $scope.type_info.plotLines.x.indexOf(o);
            $scope.type_info.plotLines.x.splice(i, 1);
        } else {
            var i = $scope.type_info.plotLines.y.indexOf(o);
            $scope.type_info.plotLines.y.splice(i, 1);
        }
        $scope.GenerateHighchart();
    }

    //Graph Preview Generator
    $scope.GenerateHighchart = function () {
        if ($scope.tabulardata.rows.length > 0 && $scope.validation.formatData()) {
            $scope.type_info.categories = $scope.tabulardata.columns;
            $scope.graphdata = DataFactory.BubbleFamily.GenerateTabularHighchartData($scope.type_info);
            $scope.graphdata.series = DataFactory.BubbleFamily.GenerateTabularRawSeries($scope.refresh_info, $scope.tabulardata, $scope.originalData, $scope.type_info.type);
        }
    }

    //Step One Submit
    $scope.ValidateURL = function () {
        $scope.formLoad = true;
        try {
            DataFactory.GetData($scope.refresh_info.url, $scope.refresh_info.method).then(
                function successCallback(response) {
                    $scope.originalData = response.data;
                    $scope.validation.url = true;
                    $scope.validation.urlChanged = false;
                    $scope.validation.current = 'two';
                    $scope.originalDataKeys = Object.keys(response.data[0]);
                    $scope.formLoad = false;
                },
                function errorCallback(response) {
                    $scope.validation.url = false;
                    $scope.stepone.url.$invalid = true;
                    console.log($scope.stepone);
                    $scope.validation.urlChanged = false;
                    $scope.formLoad = false;
                });
        } catch (e) {
            $scope.validation.url = false;
            //$scope.stepone.url.$invalid = true;
            $scope.validation.urlChanged = false;
            $scope.formLoad = false;
        }
    }

    //Step Two Submit
    $scope.SubmitWidgetCharacteristics = function () {
        $scope.validation.widgetCharacteristics = true;
        $scope.validation.current = "three";
    }

    //Step Three Submit

    //Method Calls
    $scope.CreateModalTitle();

    //Add Widget
    $scope.AddWidget = function () {
        $mdDialog.hide({
            type_info: $scope.type_info,
            tabular_data: $scope.tabulardata,
            refresh_info: $scope.refresh_info
        });
    }

    //Method Calls for Tests
    setInterval($scope.ValidateURL(), 0);
    setInterval($scope.SubmitWidgetCharacteristics(), 1000);



    /**/
    var refreshInfo = {
        //Basic Users
        url: "",                //[S1]
        method: "",             //[S1]

        //Advanced Users
        parameters: {},          //[S1] - json for post params

        //Identified from response of url
        type: "tabular",        //[tabular, multilevel]
    }

    var widgetInfo = {
        //Basic Users
        name: "",               //[S2] - name of widget

        //Identified from menu
        type: "line",            //['line','bar','bubble','map']

        //Advanced Users
        header: true,           //[S2] - enable header
        hardRefresh: true,      //[S2] - Hard Refresh button visibility

        //Default from GridStack
        height: 18,              //[GS] - widget height
        width: 6,               //[GS] - widget width
        x: 0,                   //[GS] - x-position
        y: 0,                   //[GS] - y-position
    }

    //Used for Parse Series
    var tabularInfo = {
        //Basic Users
        label: "",          //[S3] - main key label
        rows: [],           //[S3] - row indices
        columns: [],        //[S3] - column keys 
        //                              - bubble/scatter/markermap - [x,y,z]
        //                              - bar/line - array of keys
    }

    //Used for Parse Series
    var multilevelInfo = {}

    /*
        results of parsed-multilevelInfo and parsed-tabularInfo should fit:
            - chartInfo's series
            - table's series
            - stoplight's series
    */

    var chartInfo = {
        /*
            - 
        */

    }


    /**/

});
app.controller('BubbleFamilyController', function ($mdSidenav, $scope, $mdDialog, callstate, DataFactory, $filter, svg, toms, TabularFactory) {
    //Variables
    $scope.SVG = svg;// .SVG;               //getting svg items from config
    $scope.callstate = callstate;           //create state or update state of modal
    $scope.modalTitle = "";                 //determines Create or Update
    $scope.modalSubtitle = "";              //subtitle depending on which step
    $scope.formLoad = false;                //Load State

    //Raw Data
    $scope.originalData = undefined;        //raw data from webservice & Variable for Factory Processing [DataFactory.GenerateTabularRawSeries(obj,obj,obj) - 3rd argument]
    $scope.originalDataKeys = [];           //Keys derived from raw data (originalData)

    // Variable for Wizard Step State
    $scope.WizardSteps = [
        { id: 1, icon: $scope.SVG.s1, desc: "Identify your Data Source", tooltip: "Identify your data source to get hold of all the data we need to create our widget.", done: false },
        { id: 2, icon: $scope.SVG.s2, desc: "Customize your Widget", tooltip: "Single out your widget's properties and behavior.", done: false },
        { id: 3, icon: $scope.SVG.s3, desc: "Format your Data", tooltip: "Isolate the data that you need to see in your graph and see how it looks as a graph.", done: false },
        { id: 4, icon: $scope.SVG.s4, desc: "Customize your Graph", tooltip: "Customize the graph generated by manipulating the chart's properties.", done: false },
        { id: 5, icon: $scope.SVG.laststep, desc: "Review your Widget", tooltip: "Review the widget generated from the data you selected and properties you customized.", done: false },
    ]

    // Creates The title of the modal
    $scope.CreateModalTitle = function () {
        //Creates the Modal Title depending on callstate [update || create]
        switch (callstate) {
            case "create": $scope.modalTitle = "Create your Widget"; break;
            case "update": $scope.modalTitle = "Reconfigure your Widget"; break;
            default: $scope.modalTitle = "You did something wrong.";
        }
        $scope.modalSubtitle = $scope.WizardSteps[0].tooltip;

        //Initializes the validationHistory from number of steps existing in WizardSteps
        angular.forEach($scope.WizardSteps, function (o, i) {
            $scope.validationHistory.push(false);
        })
        $scope.validationHistory[1] = true;
    }

    $scope.validationHistory = [];
    $scope.wizard = {
        currStep: 1,
        nextValid: false,
        advanced: false,
        load: false
    }

    $scope.toggleFlags = []
    $scope.ToggleFlag = function (index) {
        $scope.toggleFlags[index] = !$scope.toggleFlags[index];
    }

    $scope.chartTypes = [{ name: "Bubble", value: 'bubble' }, { name: "Scatter", value: 'scatter' }]
    $scope.stackingType = [{ name: 'None', value: '' }, { name: 'Percentage', value: 'percent' }, { name: 'Normal', value: 'normal' }]
    $scope.lineStyles = ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
    $scope.markersSymbol = ['circle', 'square', 'diamond', 'triangle', 'triangle-down'];

    $scope.dataSelectTable = {
        col: 5,
        row: 5,
        colpage: 0,
        rowpage: 0,
        OpenFilter: function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        },
        AddColumn: function () {
            this.col += 1;
        },
        AddRow: function () {
            this.row += 1;
        },
        MinusColumn: function () {
            this.col -= 1;
        },
        MinusRow: function () {
            this.row -= 1;
        }
    }

    $scope.customGraphTable = {
        header: ['color'],     //
        col: 5,
        row: 2,
        colpage: 0,
        rowpage: 0,
        OpenFilter: function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        },
        AddColumn: function () {
            this.col += 1;
        },
        AddRow: function () {
            this.row += 1;
        },
        MinusColumn: function () {
            this.col -= 1;
        },
        MinusRow: function () {
            this.row -= 1;
        }
    }

    //Variable for Plot Band Mgt
    $scope.plotBand = {
        id: '',
        axis: 'x',
        rotation: 0,
        from: 0,
        to: 0,
        color: "#CCC",
        text: "Sample Plot Band",

        //defaults
        textAlign: 'center',
    }

    //Variable for Plot Line Mgt
    $scope.plotLine = {
        id: '',
        value: 0,
        width: 1,
        axis: 'x',
        color: "#CCC",
        dashStyle: 'Solid',
        text: 'Sample PlotLine',
        verticalAlign: 'Top',                 //top-middle-bottom,
        rotation: 0,

        //defaults
        textAlign: 'center',
        align: 'center'
    }

    $scope.CustomGraphSettings = [
        { name: "Graph Colors", active: true, id: 'color' },
        { name: "Line Width", active: false, id: 'lineWidth' },
        { name: "Line Style", active: false, id: 'dashStyle' },
        { name: "Marker Symbol", active: false, id: 'symbol' },
        { name: "Marker Radius", active: false, id: 'radius' },
    ];

    //Variable for Plot Band Mgt
    $scope.plotBand = {
        id: "",
        axis: 'x',
        rotation: 0,
        from: 0,
        to: 0,
        color: "#CCC",
        text: "Sample Plot Band",

        //defaults
        textAlign: 'center',
    }

    //Variable for Plot Line Mgt
    $scope.plotLine = {
        id: "",
        value: 0,
        width: 1,
        axis: 'x',
        color: "#CCC",
        dashStyle: 'Solid',
        text: 'Sample PlotLine',
        verticalAlign: 'Top',                 //top-middle-bottom,
        rotation: 0,

        //defaults
        textAlign: 'center',
        align: 'center'
    }
    /*************************************************************************/
    /******                 IMPORTANT VARIABLES                          *****/
    /*************************************************************************/
    $scope.refreshInfo = {
        //Basic Users
        url: "json/rdata.php",     //[S1]
        method: "GET",             //[S1]

        interval: {                 //[S2]
            type: 'Seconds',
            unit: 1,
            value: 1000
        },

        //Advanced Users
        parameters: {},          //[S1] - json for post params

        //Identified from response of url
        type: "tabular",        //[tabular, multilevel]
    }

    $scope.widgetInfo = {
        //Basic Users
        name: "",               //[S2] - name of widget

        //Identified from menu
        type: "chart",            //['line','bar','bubble','map']

        //Advanced Users
        header: false,           //[S2] - enable header
        hardRefresh: false,      //[S2] - Hard Refresh button visibility

        //Default from GridStack
        height: 18,              //[GS] - widget height
        width: 6,               //[GS] - widget width
        x: 0,                   //[GS] - x-position
        y: 0,                   //[GS] - y-position
    }

    //Used for Parse Series
    $scope.tabularInfo = {
        label: "",
        rows: [],
        columns: {
            x: "",
            y: "",
            z: "",
            name: ""
        },
        color: [],
        dashStyle: [],
        lineWidth: [],
        symbol: [],
        radius: [],
        type: "bubble",
    }

    /*
        results of parsed-multilevelInfo and parsed-tabularInfo should fit:
            - chartInfo's series
            - table's series
            - stoplight's series
    */

    $scope.chartInfo = {
        id: "hcid",
        type: "bubble",
        xname: "X",
        yname: "Y",
        zname: "Radius",
        categories: [],
        plotBands: {
            x: [],
            y: []
        },
        plotLines: {
            x: [],
            y: []
        }
    }
    /*************************************************************************/
    /******                 IMPORTANT VARIABLES                          *****/
    /*************************************************************************/

    $scope.GeneratePlotID = function () {
        var num = $scope.chartInfo.plotBands.x.length + $scope.chartInfo.plotBands.y.length + $scope.chartInfo.plotLines.x.length + $scope.chartInfo.plotLines.y.length;
        return "plot" + num.toString();
    }

    //For Review Preview
    $scope.StringifySelectedColumns = function () {
        var str = "";
        if ($scope.tabularInfo.columns.length > 1) {
            angular.forEach($scope.tabularInfo.columns, function (o, i) {
                if (i != $scope.tabularInfo.columns.length - 1) {
                    str = str + o + ", ";
                } else {
                    str = str + " and " + o;
                }
            })
        } else {
            str = $scope.tabularInfo.columns[0] + " only";
        }
        return str;
    }
    $scope.StringifySelectedRows = function () {
        var str = "";
        if ($scope.tabularInfo.rows.length > 1) {
            angular.forEach($scope.tabularInfo.rows, function (o, i) {
                if (i != $scope.tabularInfo.rows.length - 1) {
                    str = str + $scope.originalData[o][$scope.tabularInfo.label] + ", ";
                } else {
                    str = str + " and " + $scope.originalData[o][$scope.tabularInfo.label];
                }
            })
        } else {
            str = $scope.originalData[0][$scope.tabularInfo.label] + " only";
        }
        return str;
    }

    $scope.ToMS = function (interval, type) {
        //Time Converter
        var converted;
        switch (type) {
            case "Second":
            case "Seconds":
                converted = interval * 1000;
                break;
            case "Minute":
            case "Minutes":
                converted = interval * 60000;
                break;
            case "Hour":
            case "Hours":
                converted = interval * 3600000;
                break;
        }
        return converted;
    }


    //Step On Change
    $scope.OnChangeStepOne = function () {
        $scope.validationHistory[0] = false;
        $scope.wizard.nextValid = false;
    }
    $scope.OnChangeStepTwo = function (form) {
        $scope.refreshInfo.interval.value = $scope.ToMS($scope.refreshInfo.interval.unit, $scope.refreshInfo.interval.type)
        if (!$scope.widgetInfo.header) {
            $scope.widgetInfo.name = "";
            if (form.$valid)
                $scope.validationHistory[1] = true;
        }
        else if ($scope.widgetInfo.name != '' && form.$valid)
            $scope.validationHistory[1] = true;
        else
            $scope.validationHistory[1] = false;
        $scope.ValidateStep(true);//$scope.validationHistory[1]);
    }
    $scope.OnChangeStepThree = {
        ChangeDataKey: function (val) {
            $scope.tabularInfo.label = val;
            $scope.GenerateHighchart();
        }
    }

    //Step Resets
    $scope.ResetStepOne = function () {
        $scope.toggleFlags = [false, false];
        $scope.ValidateStep($scope.validationHistory[0]);
    }
    $scope.ResetStepTwo = function () {
        $scope.toggleFlags = [false, false, false];
        $scope.wizard.advanced = $scope.widgetInfo.header;
        $scope.ValidateStep($scope.validationHistory[1]);
    }

    //Wizard Navigator
    $scope.ChangeStep = function (id) {
        if ($scope.wizard.currStep > id || $scope.wizard.nextValid) {// 
            $scope.wizard.currStep = id;
            $scope.wizard.advanced = false;
            $scope.modalSubtitle = $scope.WizardSteps[($scope.wizard.currStep - 1)].tooltip;
            angular.forEach($scope.WizardSteps, function (o) {
                if (o.id < id) {
                    o.done = true;
                    $scope.ValidateStep(false);
                }
                else {
                    o.done = false;
                }
            })
            switch ($scope.wizard.currStep - 1) {
                case 0: $scope.ResetStepOne(); break;
                case 1: $scope.ResetStepTwo(); break;
                case 2: setTimeout(function () {
                    $scope.OnChangeStepThree.ChangeDataKey($scope.tabularInfo.label);
                }, 500); break;
                case 3: setTimeout(function () { $scope.GenerateHighchart(); }, 500); break;
                case 4: setTimeout(function () { $scope.GenerateHighchart(); }, 500); break;
                default: break;
            }
        }
    }
    $scope.ValidateStep = function (valid) {
        $scope.wizard.nextValid = valid;
    }
    $scope.ToggleAdvanced = function () {
        $scope.wizard.advanced = !$scope.wizard.advanced;
    }

    //Index Checkers
    $scope.GetIndexOf = function (o) {
        //Determines o's index in raw data
        return $scope.originalData.indexOf(o);
    }
    $scope.GetGraphIndexOf = function (o) {
        //Determines o's index in processed data of selected rows
        return $scope.tabularInfo.rows.indexOf(o);
    }

    $scope.CustomGraphHeadToggle = function (o) {
        var i = $scope.customGraphTable.header.indexOf(o.id);
        var ii = $scope.CustomGraphSettings.indexOf(o);
        $scope.CustomGraphSettings[ii].active = !$scope.CustomGraphSettings[ii].active;
        if (i != -1) {
            $scope.customGraphTable.header.splice(i);
        } else {
            $scope.customGraphTable.header.push(i);
        }
    }


    //PlotBands Managers
    $scope.AddPlotBand = function () {
        //Adds Plot Band
        $scope.plotLine.id = $scope.GeneratePlotID();
        if ($scope.plotBand.axis == 'x') {
            $scope.chartInfo.plotBands.x.push($scope.plotBand);
        } else {
            $scope.chartInfo.plotBands.y.push($scope.plotBand);
        }
        $scope.plotBand = {
            axis: 'x',
            id: "",
            rotation: 0,
            from: 0,
            to: 0,
            color: "#CCC",
            text: "Sample Plot Band",

            //defaults
            textAlign: 'center',
        }
        $scope.GenerateHighchart();
    }
    $scope.RemovePlotBand = function (o) {
        if (o.axis == 'x') {
            var i = $scope.chartInfo.plotBands.x.indexOf(o);
            $scope.chartInfo.plotBands.x.splice(i, 1);
        } else {
            var i = $scope.chartInfo.plotBands.y.indexOf(o);
            $scope.chartInfo.plotBands.y.splice(i, 1);
        }
        $scope.GenerateHighchart();
    }

    //PlotBands Managers
    $scope.AddPlotLine = function () {
        //Adds Plot Line
        $scope.plotLine.id = $scope.GeneratePlotID();
        if ($scope.plotLine.axis == 'x') {
            $scope.chartInfo.plotLines.x.push($scope.plotLine);
        } else {
            $scope.chartInfo.plotLines.y.push($scope.plotLine);
        }
        $scope.plotLine = {
            id: "",
            value: 0,
            width: 1,
            axis: 'x',
            color: "#CCC",
            dashStyle: 'Solid',
            text: 'Sample PlotLine',
            verticalAlign: 'Top',                 //top-middle-bottom,
            rotation: 0,

            //defaults
            textAlign: 'center',
            align: 'center'
        }
        $scope.GenerateHighchart();
    }
    $scope.RemovePlotLine = function (o) {
        if (o.axis == 'x') {
            var i = $scope.chartInfo.plotLines.x.indexOf(o);
            $scope.chartInfo.plotLines.x.splice(i, 1);
        } else {
            var i = $scope.chartInfo.plotLines.y.indexOf(o);
            $scope.chartInfo.plotLines.y.splice(i, 1);
        }
        $scope.GenerateHighchart();
    }

    //Togglers
    $scope.ChangeDataKey = function (key) {
        //Change label name for graph plotting
        $scope.tabularInfo.columns = [];
        $scope.tabularInfo.rows = [];
        $scope.tabularInfo.label = key;
        $scope.GenerateHighchart();
        //if ($scope.tabularInfo.label == '') {
        //    $scope.tabularInfo.label = key;
        //    $scope.originalDataKeys.splice($scope.originalDataKeys.indexOf(key), 1)
        //} else {
        //    $scope.originalDataKeys.splice($scope.originalDataKeys.indexOf(key), 1)
        //    $scope.originalDataKeys.push($scope.tabularInfo.label);
        //    $scope.tabularInfo.label = key;
        //}
    }
    $scope.CheckSelectedData = function (obj) {
        //Checks if obj is existing in selected rows
        if ($scope.tabularInfo.rows.indexOf(obj) == -1) return false;
        else return true;
    }
    $scope.ToggleSelectedData = function (obj) {
        //Push|Pop obj in|from selected rows
        var key = $scope.tabularInfo.rows.indexOf(obj);
        if (key == -1) {
            $scope.tabularInfo.rows.push(obj);
            $scope.tabularInfo.color.push("");
            $scope.tabularInfo.symbol.push("");
            $scope.tabularInfo.radius.push(4);
        }
        else {
            $scope.tabularInfo.rows.splice(key, 1);
            $scope.tabularInfo.color.splice(key, 1);
            $scope.tabularInfo.symbol.splice(key, 1);
            $scope.tabularInfo.radius.splice(key, 1);
        }
        $scope.GenerateHighchart();
    }
    $scope.CheckSelectedKey = function (obj) {
        //Checks if obj is existing in selected columns
        if ($scope.chartInfo.type.toLowerCase() == 'bubble') {
            return obj == $scope.tabularInfo.columns.x || obj == $scope.tabularInfo.columns.y || obj == $scope.tabularInfo.columns.z;
        }
        else {
            return obj == $scope.tabularInfo.columns.x || obj == $scope.tabularInfo.columns.y;
        }
    }
    $scope.ToggleSelectedKey = function (obj) {
        //Push|Pop obj in|from selected columns
        var key = $scope.tabularInfo.columns.indexOf(obj);
        if (key == -1) {
            if ($scope.tabularInfo.columns.length < 3) {
                $scope.tabularInfo.columns.push(obj);
            }
        }
        else {
            $scope.tabularInfo.columns.splice(key, 1);
        }
        $scope.GenerateHighchart();
    }

    //Step One Submit
    $scope.ValidateURL = function (form) {
        $scope.originalData = {};
        $scope.originalDataKeys = {};
        $scope.wizard.load = true;
        setTimeout(function () {
            try {
                DataFactory.GetData($scope.refreshInfo.url, $scope.refreshInfo.method).then(
                    function successCallback(response) {
                        $scope.originalData = response.data;
                        $scope.originalDataKeys = Object.keys(response.data[0]);
                        $scope.wizard.load = false;
                        form.url.$invalid = false;
                        form.url.$valid = true;
                        $scope.ValidateStep(true);
                        $scope.validationHistory[0] = true;
                    },
                    function errorCallback(response) {
                        form.url.$invalid = true;
                        $scope.wizard.load = false;
                        $scope.ValidateStep(false);
                    });
            } catch (e) {
                form.url.$invalid = true;
                $scope.wizard.load = false;
                $scope.ValidateStep(false);
            }
        }, 1500)
    }

    //Step Two Submit
    $scope.ValidateStepTwo = function (form) {
        if ($scope.widgetInfo.header && $scope.widgetInfo.name.length != 0) {
            $scope.ValidateStep(form.$valid);
        } else {
            $scope.widgetInfo.name.length = 0;
        }
    }

    //Graph Preview Generator
    $scope.GenerateHighchart = function () {
        if ($scope.tabularInfo.rows.length > 0) {
            var series = TabularFactory.BubbleFamily.GenerateSeries($scope.originalData, $scope.tabularInfo);
            $scope.graphdata = TabularFactory.BubbleFamily.GenerateChart($scope.chartInfo, $scope.tabularInfo, series);
            $scope.ValidateStep(true);
        }
    }

    //Closes the modal
    $scope.CloseModal = function () {
        $mdDialog.hide();
    }

    //GUYS ITO NA YUNG PANG CREATE NG WIDGET. NAIIYAK AKO HUHU
    $scope.AddWidget = function () {
        $mdDialog.hide({
            refreshInfo: $scope.refreshInfo,
            widgetInfo: $scope.widgetInfo,
            tabularInfo: $scope.tabularInfo,
            chartInfo: $scope.chartInfo,
        });
    }

    //Auto Calls
    $scope.CreateModalTitle();
});