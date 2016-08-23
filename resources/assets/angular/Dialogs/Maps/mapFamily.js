/* Line Family MODULE */
app.controller('MapFamilyController', function ($scope, $mdDialog, callstate, DataFactory, $filter, svg) {
    //Variables
    $scope.SVG = svg;// .SVG;
    $scope.callstate = callstate;
    $scope.modalTitle = "";
    $scope.originalData = undefined;
    $scope.originalDataKeys = [];
    $scope.formLoad = false;
    $scope.tcol = 5;
    $scope.trow = 5;
    $scope.colpage = 0;
    $scope.rowpage = 0;

    $scope.graphdata = {
        categories: [],
        series: [],
        type:""
    };
    $scope.graphColors = [];

    //Steps Validation
    $scope.validation = {
        current: "one",
        url: false,
        urlChanged: false,
        widgetCharacteristics: false,
        formatData: function () {
            if ($scope.data_info.tabular.indices.columns.length > 0 && $scope.data_info.tabular.indices.rows.length > 0) {
                $scope.validation.current = "four";
                return true;
            }
            else {
                $scope.validation.current = "three";
                return false;
            }
        },

    }

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
        type: 'Line'
    }

    //Methods
    $scope.GetIndexOf = function (o) {
        return $scope.originalData.indexOf(o);
    }
    $scope.ToMS = function (interval, type) {
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
        $scope.validation.urlChanged = true;
        $scope.validation.url = false;
        $scope.validation.widgetCharacteristics = false;
        $scope.validation.current = 'one';
    }
    $scope.WidgetCharacteristicsChange = function () {
        $scope.validation.widgetCharacteristics = false;
        $scope.validation.current = "two";
    }
    $scope.CreateModalTitle = function () {
        switch (callstate) {
            case "create": $scope.modalTitle = "Create Widget"; break;
            case "update": $scope.modalTitle = "Reconfigure your Widget"; break;
            default: $scope.modalTitle = "You did something wrong.";
        }
    }
    $scope.ChangeDataKey = function (key) {
        if ($scope.data_info.tabular.label == '') {
            $scope.data_info.tabular.label = key;
            $scope.originalDataKeys.splice($scope.originalDataKeys.indexOf(key), 1)
        } else {
            $scope.originalDataKeys.splice($scope.originalDataKeys.indexOf(key), 1)
            $scope.originalDataKeys.push($scope.data_info.tabular.label);
            $scope.data_info.tabular.label = key;
        }
    }

    //Togglers
    $scope.CheckSelectedData = function (obj) {
        if ($scope.data_info.tabular.indices.rows.indexOf(obj) == -1) return false;
        else return true;
    }
    $scope.ToggleSelectedData = function (obj) {
        var key = $scope.data_info.tabular.indices.rows.indexOf(obj);
        if (key == -1) {
            $scope.data_info.tabular.indices.rows.push(obj);
            //$scope.colors.push(null);
            //$scope.multiformSelectedTypes.push(null);
        }
        else {
            $scope.data_info.tabular.indices.rows.splice(key, 1);
            //$scope.colors.splice(key, 1);
            //$scope.multiformSelectedTypes.splice(key, 1);
        }
        $scope.GenerateChartPreview();
    }
    $scope.CheckSelectedKey = function (obj) {
        if ($scope.data_info.tabular.indices.columns.indexOf(obj) == -1) return false;
        else return true;
    }
    $scope.ToggleSelectedKey = function (obj) {
        var key = $scope.data_info.tabular.indices.columns.indexOf(obj);
        if (key == -1) {
            $scope.data_info.tabular.indices.columns.push(obj);
        }
        else {
            $scope.data_info.tabular.indices.columns.splice(key, 1);
        }
        $scope.GenerateChartPreview();
    }

    //Graph Preview Generator
    $scope.GenerateChartPreview = function () {
        //Generate chart with Parsing Data
        if ($scope.data_info.tabular.indices.columns.length > 0 && $scope.data_info.tabular.indices.rows.length > 0) {
            $scope.graphdata = {
                categories: [],
                series: [],
                type: $scope.type_info.type.toLowerCase()
            };
            $scope.graphdata.categories = $scope.data_info.tabular.indices.columns;
            angular.forEach($scope.data_info.tabular.indices.rows, function (o) {
                var data = [];
                angular.forEach($scope.data_info.tabular.indices.columns, function (oo) {
                    data.push($scope.originalData[o][oo]);
                });
                $scope.graphdata.series.push({
                    name: $scope.originalData[o][$scope.data_info.tabular.label],
                    data: data,
                    color: "",
                    dashStyle: "",
                    marker: {
                        symbol: "url(assets/icons/software.svg)",
                        radius: 4,
                        width:4,
                    }
                });
            });
        }
    }
    $scope.GenerateCustomizedChart = function () {
        //Generate chart without Parsing Data
        //For:
        //Chart Type
        //Colors
        var newgraph = angular.copy($scope.graphdata);
        $scope.graphdata = {
            categories: newgraph.categories,
            series: newgraph.series,
            type: $scope.type_info.type.toLowerCase()
        };
        console.log($scope.graphdata);
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

    //Method Calls for Tests
    setInterval($scope.ValidateURL(), 0);
    setInterval($scope.SubmitWidgetCharacteristics(), 1000);
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