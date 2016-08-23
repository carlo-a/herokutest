app.controller('UpdateTextFamilyController', function ($mdSidenav, $scope, $mdDialog, callstate, DataFactory, $filter, svg, toms) {
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
    { id: 3, icon: $scope.SVG.s3, desc: "Format your Data", tooltip: "Enter and edit the text you want to appear on your widget.", done: false },
    { id: 4, icon: $scope.SVG.laststep, desc: "Review your Widget", tooltip: "Review the widget generated from the data you selected and properties you customized.", done: false },
    ];

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
        });
        $scope.validationHistory[1] = true;
        $scope.validationHistory[2] = true;
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

    /*************************************************************************/
    /******                 IMPORTANT VARIABLES                          *****/
    /*************************************************************************/
    $scope.refreshInfo = {
        //Basic Users
        url: "json/rdata.php",     //[S1]
        method: "GET",             //[S1]

        interval: {                //[S2]
            type: 'seconds',
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
        type: "text",            

        //Advanced Users
        header: false,           //[S2] - enable header
        hardRefresh: false,      //[S2] - Hard Refresh button visibility

        //Default from GridStack
        height: 0,              //[GS] - widget height
        width: 0,               //[GS] - widget width
        x: 0,                   //[GS] - x-position
        y: 0,                   //[GS] - y-position
    }

    $scope.textInfo = {
        id: "previewText",
        source: "",
        URLFlag: false,
        StaticFlag: false,
        content: ""
    };

    /*************************************************************************/
    /******                 IMPORTANT VARIABLES                          *****/
    /*************************************************************************/

    //Step On Change
    $scope.OnChangeStepOne = function () {
        $scope.validationHistory[0] = false;
        $scope.wizard.nextValid = false;
    }
    $scope.OnChangeStepTwo = function (form) {
        if (!$scope.widgetInfo.header) {
            $scope.widgetInfo.name = "";
            if (form.$valid || $scope.textInfo.StaticFlag)
                $scope.validationHistory[1] = true;
        }
        else if ($scope.widgetInfo.name != '' && form.$valid)
            $scope.validationHistory[1] = true;
        else
            $scope.validationHistory[1] = false;
        $scope.ValidateStep($scope.validationHistory[1]);
    }
    $scope.addSummernote = function() {
        var enterDump = "";
        var enterStr = "";

        $('#text_editor').summernote({
            height: '400',
            disableDragAndDrop: true,
            toolbar:[
            ['help', ['help']],
            ['do', ['undo', 'redo']],
            ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
            ['fontsize', ['fontsize', 'color']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['link', 'table', 'hr']],
            ['codeview', ['codeview']]
            ],
            callbacks: {
                onKeydown: function(e) {
                    if ($scope.textInfo.URLFlag){
                        e.preventDefault();
                    }
                }
            }
        });

        if ($scope.textInfo.URLFlag){
            var myOut = "<p>";
            myOut += JSON.stringify($scope.textInfo.content);
            myOut += "</p>";

            $scope.textInfo.content = myOut;

            $('#text_editor').summernote('code', $scope.textInfo.content);
        }
    }

    $scope.previewSummernote = function() {
        $scope.ValidateStep(true);
        $scope.textInfo.content = $('#text_editor').summernote('code');

        if ($scope.textInfo.StaticFlag){
            enterDump = $('#text_editor').summernote('code');
            enterDump = enterDump.replace(/\<p>/g, '');
            enterDump = enterDump.replace(/\<\/p>/g, '<br/>');

            enterStr = '<p>'+enterDump+'</p>';

            $scope.textInfo.content = enterStr;
        }

        $('#text_editor').summernote('code', $scope.textInfo.content);
        $('#'+$scope.textInfo.id).html($scope.textInfo.content);
    }

    //Step Resets
    $scope.ResetStepOne = function () {
        $scope.toggleFlags = [false, false];
        $scope.ValidateStep($scope.validationHistory[0]);
        $scope.textInfo.content = "";
    }
    $scope.ResetStepTwo = function () {
        $scope.toggleFlags = [false, false, false];
        $scope.wizard.advanced = $scope.widgetInfo.header;
        $scope.ValidateStep($scope.validationHistory[1]);

        if ($scope.textInfo.URLFlag){
            $scope.textInfo.content = $scope.originalData;
            $('#text_editor').summernote('code', "");
        }
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
        if (i != -1) {
            $scope.customGraphTable.header.splice(i);
            $scope.CustomGraphSettings[ii].active = false;
        } else {
            $scope.CustomGraphSettings[ii].active = true;
            $scope.customGraphTable.header.push(i);
        }
    }

    //Togglers
    $scope.ChangeDataKey = function (key) {
        //Change label name for graph plotting
        $scope.tabularInfo.columns = [];
        $scope.tabularInfo.rows = [];
        $scope.tabularInfo.label = key;
        // $scope.GenerateHighchart();
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
            $scope.tabularInfo.dashStyle.push("");
            $scope.tabularInfo.lineWidth.push(2);
            $scope.tabularInfo.symbol.push("");
            $scope.tabularInfo.radius.push(4);
        }
        else {
            $scope.tabularInfo.rows.splice(key, 1);
            $scope.tabularInfo.color.splice(key, 1);
            $scope.tabularInfo.dashStyle.splice(key, 1);
            $scope.tabularInfo.lineWidth.splice(key, 1);
            $scope.tabularInfo.symbol.splice(key, 1);
            $scope.tabularInfo.radius.splice(key, 1);
        }
        // $scope.GenerateHighchart();
    }
    $scope.CheckSelectedKey = function (obj) {
        //Checks if obj is existing in selected columns
        if ($scope.tabularInfo.columns.indexOf(obj) == -1) return false;
        else return true;
    }
    $scope.ToggleSelectedKey = function (obj) {
        //Push|Pop obj in|from selected columns
        var key = $scope.tabularInfo.columns.indexOf(obj);
        if (key == -1) {
            $scope.tabularInfo.columns.push(obj);
        }
        else {
            $scope.tabularInfo.columns.splice(key, 1);
        }
        // $scope.GenerateHighchart();
    }

    //Step One Submit
    $scope.GetDataSource = function () {
        if ($scope.textInfo.source == 'URL') {
            $scope.textInfo.URLFlag = true;
            $scope.textInfo.StaticFlag = false;
            $scope.ResetStepOne();
            $scope.ResetStepTwo();
            $scope.ValidateStep(false);
            $scope.validationHistory[0] = false;
        }
        else {
            $scope.textInfo.URLFlag = false;
            $scope.textInfo.StaticFlag = true;
            $scope.ResetStepOne();
            $scope.ResetStepTwo();
            $scope.ValidateStep(true);
        }
    }

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
                        $scope.textInfo.content = $scope.originalData;
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
        }, 0)
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
        if ($scope.tabularInfo.rows.length > 0 && $scope.tabularInfo.columns.length > 0) {
            $scope.chartInfo.categories = $scope.tabularInfo.columns;
            $scope.graphdata = DataFactory.LineFamily.GenerateTabularHighchartData($scope.chartInfo);
            $scope.graphdata.series = DataFactory.LineFamily.GenerateTabularRawSeries($scope.refreshInfo, $scope.tabularInfo, $scope.originalData);
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
            textInfo: $scope.textInfo,
        });
    }

    //Auto Calls
    $scope.CreateModalTitle();
})
.filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
})
.filter('roundup', function () {
    return function (value) {
        return Math.ceil(value);
    };
})