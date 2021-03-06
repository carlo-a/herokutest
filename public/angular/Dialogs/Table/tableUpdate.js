app.controller('TableUpdateController', function ($mdSidenav, $scope, $mdDialog, callstate, DataFactory, $filter, svg, toms, modalData) {
    //Variables
    $scope.SVG = svg;// .SVG;               //getting svg items from config
    $scope.callstate = callstate;           //create state or update state of modal
    $scope.modalTitle = "";                 //determines Create or Update
    $scope.modalSubtitle = "";              //subtitle depending on which step
    $scope.formLoad = false;                //Load State

    //Raw Data
    $scope.originalData = undefined;        //raw data from webservice & Variable for Factory Processing [DataFactory.GenerateTabularRawSeries(obj,obj,obj) - 3rd argument]
    $scope.originalDataKeys = [];           //Keys derived from raw data (originalData)

    // Creates The title of the modal
    $scope.CreateModalTitle = function () {
        //Creates the Modal Title depending on callstate [update || create]
        switch (callstate) {
            case "create": $scope.modalTitle = "Create your Table Widget"; break;
            case "update": $scope.modalTitle = "Reconfigure your Widget"; break;
            default: $scope.modalTitle = "You did something wrong.";
        }

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

    $scope.tableTypes = [{ name: "Table", value: 'table' }, { name: "Stoplight", value: 'stoplight' }]

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


    /*************************************************************************/
    /******                 IMPORTANT VARIABLES                          *****/
    /*************************************************************************/
    $scope.refreshInfo = modalData.refreshInfo;
    $scope.widgetInfo = modalData.widgetInfo;
    $scope.tabularInfo = modalData.tabularInfo;
    $scope.chartInfo = modalData.chartInfo;
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
            $scope.GenerateTable();
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
                case 3: setTimeout(function () { $scope.GenerateTable(); }, 500); break;
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

    //Stoplight Functions
    $scope.AddStoplightKey = function (o) {
        $scope.tabularInfo.stoplightInfo.columns.push(o);
        $scope.tabularInfo.stoplightInfo.mapping.push([]);
        $scope.tabularInfo.stoplightInfo.color.push([]);

        //console.log($scope.tabularInfo);
    }
    $scope.DeleteStoplightKey = function (o) {
        var index = $scope.tabularInfo.stoplightInfo.columns.indexOf(o);
        $scope.tabularInfo.stoplightInfo.columns.splice(index, 1);
        $scope.tabularInfo.stoplightInfo.mapping.splice(index, 1);
        $scope.tabularInfo.stoplightInfo.color.splice(index, 1);
    }
    $scope.GetStoplightIndexOf = function (o, stoplightInfo) {
        return stoplightInfo.columns.indexOf(o);
    }

    $scope.AddStoplightInfo = function (o) {
        console.log($scope.tabularInfo);
        var index = $scope.tabularInfo.stoplightInfo.columns.indexOf(o);
        $scope.tabularInfo.stoplightInfo.mapping[index].push("");
        $scope.tabularInfo.stoplightInfo.color[index].push("");
    }
    $scope.RemoveStoplightInfo = function (o, $index) {
        var ind = $scope.tabularInfo.stoplightInfo.columns.indexOf(o);

        $scope.tabularInfo.stoplightInfo.mapping[ind].splice($index, 1);
        $scope.tabularInfo.stoplightInfo.color[ind].splice($index, 1);
    }

    $scope.CheckStoplight = function (key, index, stoplightInfo) {
        for (var i = 0; i < stoplightInfo.mapping[index].length; i++) {
            if (key == stoplightInfo.mapping[index][i]) {
                return { color: stoplightInfo.color[index][i] };
            }
        }
    }

    $scope.AddStoplightDefault = function (key, defaultColor) {
        $scope.tabularInfo.stoplightInfo.default[key] = defaultColor;
    }

    //end of stoplight functions
    //Togglers
    $scope.ChangeDataKey = function (key) {
        //Change label name for graph plotting
        $scope.tabularInfo.columns = [];
        $scope.tabularInfo.rows = [];
        $scope.tabularInfo.label = key;
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
        }
        else {
            $scope.tabularInfo.rows.splice(key, 1);
        }
        $scope.GenerateTable();
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
        $scope.GenerateTable();
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
    $scope.GenerateTable = function () {
        $scope.selectedData = [];
        //get the data depending on selected rows
        for (var k = 0; k < $scope.tabularInfo.rows.length; k++) {
            $scope.selectedData.push($scope.originalData[$scope.tabularInfo.rows[k]]);
        }

        if ($scope.selectedData.length > 0) {
            $scope.ValidateStep(true);
        }

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
    $scope.StringifyStoplightColumns = function () {
        var str = "";
        if ($scope.tabularInfo.stoplightInfo.columns.length > 1) {
            angular.forEach($scope.tabularInfo.stoplightInfo.columns, function (o, i) {
                if (i != $scope.tabularInfo.stoplightInfo.columns.length - 1) {
                    str = str + o + ", ";
                } else {
                    str = str + " and " + o;
                }
            })
        } else {
            str = $scope.tabularInfo.stoplightInfo.columns[0] + " only";
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

    $scope.AddWidget = function () {
        //console.log($scope.refreshInfo, $scope.widgetInfo, $scope.tabularInfo);
        $mdDialog.hide({
            refreshInfo: $scope.refreshInfo,
            widgetInfo: $scope.widgetInfo,
            tabularInfo: $scope.tabularInfo
        });
    }

    //Closes the modal
    $scope.CloseModal = function () {
        $mdDialog.hide();
    }

    //Auto Calls
    $scope.CreateModalTitle();

    //Update The Modal
    $scope.Update = function () {
        $scope.refreshInfo.interval.value = $scope.ToMS($scope.refreshInfo.interval.unit, $scope.refreshInfo.interval.type);
        $mdDialog.hide({
            refreshInfo: $scope.refreshInfo,
            widgetInfo: $scope.widgetInfo,
            tabularInfo: $scope.tabularInfo,
            chartInfo: $scope.chartInfo,
        });
    }

    $scope.GetData = function () {
        $scope.loadState = true;
        $scope.originalData = {};
        $scope.originalDataKeys = {};
        DataFactory.GetData($scope.refreshInfo.url, $scope.refreshInfo.method).then(
            function successCallback(response) {
                $scope.originalData = response.data;
                $scope.originalDataKeys = Object.keys(response.data[0]);
                $scope.loadState = false;
                $scope.GenerateHighchart();
            }, function errorCallback(response) { });
    }
    $scope.GetData();

});