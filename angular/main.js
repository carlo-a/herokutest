/* MAIN MODULE */
var app = angular.module('MainApplication', ['mdColorPicker', 'ngSanitize', 'ngAnimate', 'ngMaterial', 'jQueryScrollbar', 'HUD-ContentManager', 'HUD-Factory', 'HUD-Directives', 'gridstack-angular', 'highcharts-ng']); //
app.controller('MainController', function ($mdDialog, $q, $scope, ConfigurableItems, DataFactory, $interval, TabularFactory, $location) {
    console.log(window.location);
    /******************** CONFIGURABLE ITEMS ********************/
    $scope.ColorTheme = ConfigurableItems.ColorTheme;
    $scope.DefaultColorTheme = angular.copy(ConfigurableItems.ColorTheme);
    $scope.SVG = ConfigurableItems.SVG;
    $scope.Typography = ConfigurableItems.Typography;
    $scope.DarkContrast = ConfigurableItems.DarkContrast;
    $scope.Widget = ConfigurableItems.Widget;

    /******************** GLOBAL VARIABLES ********************/
    $scope.GlobalWidgetArray = [];
    $scope.ThreadArray = {};
    $scope.DashboardData = [];


    /******************** GLOBAL VARIABLES ********************/
    /* Holds all the data for each widget */
    $scope.widgetArray = [];
    /*
        $scope.sideToggle values:
        collapsed
        expanded
        painter
    */
    $scope.sideToggle = 'expanded';
    /*
        $scope.sideState values:
        main
        load dashboard
        create widget
    */
    $scope.sideState = 'main';
    /* 
        Border Styles for Configurable Items. 
    */
    $scope.borderStyles = [
        'none',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'initial',
        'inherit'
    ];

    /******************** GLOBAL METHODS ********************/
    /*
        Input: 
            [string] state - new state of the sidebar
        Description:
            Changes the state of the sidebar.
            see $scope.sideState.
    */
    $scope.ChangeSideState = function (state) {
        $scope.sideState = state;
    }
    /*
        Input: 
            [string] state - new view of the sidebar
        Description:
            Changes the view of the sidebar.
            see $scope.sideToggle.
    */
    $scope.ToggleSideBar = function (state) {
        $scope.sideToggle = state;
    }

    /* Generates unique id for widgets */
    $scope.GenerateUniqueID = function () {
        var num = $scope.GlobalWidgetArray.length;
        return "pt" + num.toString();
    }

    /* Converts to milliseconds */
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

    /* Widget Modal Forms */
    $scope.ToggleCreateModal = function (type, callstate, ev) {
        //angular.forEach($scope.ThreadArray, function (o) { o.stop();})
        var ctrl = "";
        var template = "";
        switch (type) {
            case "map":
                ctrl = "MapFamilyController";
                template = "angular/Dialogs/Maps/mapFamily.html";
                break;
            case "line":
                ctrl = "LineFamilyController";
                template = 'angular/Dialogs/Charts/LineFamily/lineFamily.html';
                break;
            case "bar":
                ctrl = "BarFamilyController";
                template = 'angular/Dialogs/Charts/BarFamily/barFamily.html';
                break;
            case "multiform":
                ctrl = "MultiformFamilyController";
                template = 'angular/Dialogs/Charts/MultiformFamily/multiformFamily.html';
                break;
            case "pie":
                ctrl = "PieFamilyController";
                template = 'angular/Dialogs/Charts/PieFamily/pieFamily.html';
                break;
            case "bubble":
                ctrl = "BubbleFamilyController";
                template = 'angular/Dialogs/Charts/BubbleFamily/bubbleFamily.html';
                break;
            case "highchartsplay":
                ctrl = "HighchartsPlayController";
                template = 'angular/Dialogs/HighchartsPlay/highchartsPlay.html';
                break;
                /*
                KYLE'S CODE START
                */
            case "heatmap":
                ctrl = "HeatmapController";
                template = 'angular/Dialogs/Charts/Heatmap/heatmap.html';
                break;
            case "treemap":
                ctrl = "TreemapController";
                template = 'angular/Dialogs/Charts/Treemap/treemap.html';
                break;
                /*
                KYLE'S CODE END
                */
                /* BERV CODE START*/
            case "table":
                ctrl = "TableFamilyController";
                template = "angular/Dialogs/Table/tableFamily.html";
                break;
                /* BERV CODE END*/
                /* ACEE CODE START */
            case "text":
                ctrl = "TextFamilyController";
                template = "angular/Dialogs/Text/textFamily.html";
                break;
                /* ACEE CODE END */
            default: break;
        }
        $mdDialog.show({
            controller: ctrl,
            templateUrl: template,
            locals: {
                callstate: callstate,
                svg: $scope.SVG,
                toms: $scope.ToMS
            },
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        })
        .then(function (response) {
            // BERV CODE START
            if (response.widgetInfo.type == "table") {
                $scope.Tabular.Table.GenerateTable(response, type);
            } else if (response.widgetInfo.type == "text") {
                $scope.Tabular.Text.GenerateText(response, type);
            }// BERV CODE END 
            else if (response != undefined) {
                $scope.Tabular.GenerateHighchart(response, type);
            }
        }, function () { });

    }

    $scope.GenerateBubbleHighchartPackery = function (data) {
        var rawdata = {};
        $.ajax({
            type: data.refreshInfo.method,
            url: data.refreshInfo.url,
            async: false,
            data: {},
            success: function (response) {
                rawdata = JSON.parse(response);
            }
        });
        var gdata = DataFactory.BubbleFamily.GenerateTabularHighchartData(data.chartInfo);
        gdata.series = DataFactory.BubbleFamily.GenerateTabularRawSeries(data.refreshInfo, data.tabularInfo, rawdata, data.chartInfo.type);
        var newWidget = { x: 0, y: 0, width: 11, height: 2, data: gdata, id: data.chartInfo.id, ptdata: data };
        $scope.widgets.push(newWidget);
    }
    /* End of Widget Modal Forms */

    /* Chart Managers */
    $scope.Tabular = {
        GenerateHighchart: function (response, type) {
            var newwidget = {};
            var uniqueid = $scope.GenerateUniqueID();
            switch (type) {
                case "map":
                case "multiform":
                    $scope.Tabular.MultiformChart.GenerateChart(response);
                    break;
                    /*
                    Arvin Pogi START
                    */
                case "pie":
                    $scope.Tabular.PieChart.GenerateChart(response);
                    break;
                    /*
                    Arvin Pogi END
                    */
                case "line":
                    $scope.Tabular.LineChart.GenerateChart(response);
                    break;
                case "bar":
                    $scope.Tabular.BarChart.GenerateChart(response);
                    break;
                case "bubble":
                    $scope.Tabular.BubbleChart.GenerateChart(response);
                    break;
                case "heatmap":
                    $scope.Tabular.Heatmap.GenerateChart(response);
                    break;
                default: break;
            }
        },
        LineChart: {
            GenerateChart: function (modalData) {
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var series = TabularFactory.LineFamily.GenerateSeries(rawdata, modalData.tabularInfo);
                        var gdata = TabularFactory.LineFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        var newWidget = { id: id, type: 'chart', active: true, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.LineChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    },
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var gdata = TabularFactory.LineFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, []);
                        var newWidget = { id: id, type: 'chart', active: false, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.LineChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.chartInfo.id]);
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        var series = TabularFactory.LineFamily.GenerateSeries(response.data, modalData.tabularInfo);
                        $scope.GlobalWidgetArray[index].chartData = TabularFactory.LineFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function (response) {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        },
        /*
       Arvin Pogi START
       */
        PieChart: {
            GenerateChart: function (modalData) {
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var series = TabularFactory.PieFamily.GenerateSeries(rawdata, modalData.tabularInfo);
                        var gdata = TabularFactory.PieFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        var newWidget = { id: id, type: 'chart', active: true, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.PieChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                        console.log($scope.ThreadArray);
                    },
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var gdata = TabularFactory.PieFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, []);
                        var newWidget = { id: id, type: 'chart', active: false, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.PieChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                        console.log($scope.ThreadArray);
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.chartInfo.id]);
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        var series = TabularFactory.PieFamily.GenerateSeries(response.data, modalData.tabularInfo);
                        $scope.GlobalWidgetArray[index].chartData = TabularFactory.PieFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function (response) {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        },
        /*
       Arvin Pogi END
       */
        BarChart: {
            GenerateChart: function (modalData) {
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var series = TabularFactory.LineFamily.GenerateSeries(rawdata, modalData.tabularInfo);
                        var gdata = TabularFactory.LineFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        var newWidget = { id: id, type: 'chart', active: true, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.BarChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    },
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var gdata = TabularFactory.LineFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, []);
                        var newWidget = { id: id, type: 'chart', active: false, width: width, height: height, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.BarChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.chartInfo.id]);
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        var series = TabularFactory.LineFamily.GenerateSeries(response.data, modalData.tabularInfo);
                        $scope.GlobalWidgetArray[index].chartData = TabularFactory.LineFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function (response) {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        },
        MultiformChart: {
            GenerateChart: function (modalData) {
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var series = TabularFactory.MultiformFamily.GenerateSeries(rawdata, modalData.tabularInfo);
                        var gdata = TabularFactory.MultiformFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        var newWidget = { id: id, type: 'chart', active: true, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.MultiformChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    },
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var gdata = TabularFactory.MultiformFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, []);
                        var newWidget = { id: id, type: 'chart', active: false, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.MultiformChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.chartInfo.id]);
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        var series = TabularFactory.MultiformFamily.GenerateSeries(response.data, modalData.tabularInfo);
                        $scope.GlobalWidgetArray[index].chartData = TabularFactory.MultiformFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function (response) {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        },
        BubbleChart: {
            GenerateChart: function (modalData) {
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var series = TabularFactory.BubbleFamily.GenerateSeries(rawdata, modalData.tabularInfo);
                        var gdata = TabularFactory.BubbleFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        var newWidget = { id: id, type: 'chart', active: true, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.BubbleChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    },
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var gdata = TabularFactory.BubbleFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, []);
                        var newWidget = { id: id, type: 'chart', active: false, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.BubbleChart.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.chartInfo.id]);
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        var series = TabularFactory.BubbleFamily.GenerateSeries(response.data, modalData.tabularInfo);
                        $scope.GlobalWidgetArray[index].chartData = TabularFactory.BubbleFamily.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series);
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function (response) {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        },
        /* KYLE'S CODE START */
        Heatmap: {
            GenerateChart: function (modalData) {
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var series = TabularFactory.Heatmap.GenerateSeries(rawdata, modalData.tabularInfo);
                        var gdata = TabularFactory.Heatmap.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series, rawdata);
                        var newWidget = { id: id, type: 'chart', active: true, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.Heatmap.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    },
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.chartInfo.id = id;
                        rawdata = response.data;
                        var gdata = TabularFactory.Heatmap.GenerateChart(modalData.chartInfo, modalData.tabularInfo, [], rawdata);
                        var newWidget = { id: id, type: 'chart', active: false, chartData: gdata, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.Heatmap.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.chartInfo.id]);
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        var series = TabularFactory.Heatmap.GenerateSeries(response.data, modalData.tabularInfo);
                        $scope.GlobalWidgetArray[index].chartData = TabularFactory.Heatmap.GenerateChart(modalData.chartInfo, modalData.tabularInfo, series, response.data);
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function (response) {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        },
        /* KYLE'S CODE END */
        /* BERV CODE START*/
        Table: {
            GenerateTable: function (modalData) {
                var id = $scope.GenerateUniqueID();
                modalData.widgetInfo.id = id;
                var newWidget = { id: id, type: 'table', active: true, modalData: modalData, rawData: [] };
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (rawdata) {
                        newWidget.rawData = rawdata.data;
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.Table.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    },
                    function (rawdata) {
                        newWidget.rawData = [];
                        newWidget.active = false;
                        $scope.GlobalWidgetArray.push(newWidget);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.Table.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.widgetInfo.id]);
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (rawdata) {
                        $scope.GlobalWidgetArray[index].rawData = rawdata.data;
                        $scope.GlobalWidgetArray[index].modalData = modalData;
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function () {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        },
        /* BERV CODE END*/
        /* KYLE'S CODE START */
        Text: {
            GenerateText: function (modalData) {
                // (response, type, 6, 2, 0, 0)
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.textInfo.id = $scope.GenerateUniqueID();
                        rawdata = response.data;
                        var newWidget = { id: id, type: 'text', active: true, textData: response, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $("#" + modalData.textInfo.id).html(modalData.textInfo.content);
                        console.log(modalData);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.Text.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    },
                    function (response) {
                        id = $scope.GenerateUniqueID();
                        modalData.textInfo.id = $scope.GenerateUniqueID();
                        rawdata = response.data;
                        var newWidget = { id: id, type: 'text', active: false, textData: response, modalData: modalData };
                        $scope.GlobalWidgetArray.push(newWidget);
                        $("#" + modalData.textInfo.id).html(modalData.textInfo.content);
                        console.log(modalData);
                        $scope.ThreadArray[id] = {
                            int: {},
                            start: function () {
                                this.int = $interval(function () {
                                    $scope.Tabular.Text.Refresh(modalData);
                                }, modalData.refreshInfo.interval.value);
                            },
                            stop: function () {
                                $interval.cancel(this.int);
                            }
                        }
                        $scope.ThreadArray[id].start();
                    });
            },
            Refresh: function (modalData) {
                var index = _.findIndex($scope.GlobalWidgetArray, ['id', modalData.textInfo.id]);
                var rawdata = {};
                TabularFactory.GetData(modalData.refreshInfo.url, modalData.refreshInfo.method).then(
                    function (response) {
                        $("#" + modalData.textInfo.id).html(modalData.textInfo.content);
                        $scope.GlobalWidgetArray[index].active = true;
                    },
                    function (response) {
                        $scope.GlobalWidgetArray[index].active = false;
                        $q.reject(response);
                    });
            }
        }
        /* KYLE'S CODE END */
    }
    /* End of Chart Managers */

    $scope.viewerDashboardName = "";
    $scope.LoadDashboard = function () {
        var length = $scope.GlobalWidgetArray.length;
        DataFactory.LoadDashboardSample().then(function (response) {
            $scope.ColorTheme = response.data.dashboard;
            angular.forEach(response.data.widgets, function (o, i) {
                if (o.widgetInfo.type == 'chart') { $scope.Tabular.GenerateHighchart(o, o.chartInfo.type); }
                else if (o.widgetInfo.type == 'text') { $scope.Tabular.Text.GenerateText(o); }
                else if (o.widgetInfo.type == 'table') $scope.Tabular.Table.GenerateTable(o);
            })
        });
    }
    $scope.LoadDashboardO = function () {
        DataFactory.LoadFromDBD1({ url: "nSLK6Oh30Yqikkj" }).then(function (response) {
            $scope.viewerDashboardName = response.data.dashboard_name;
            $scope.ColorTheme = JSON.parse(response.data.dashboard_themes);
            angular.forEach(response.data.widgets, function (o, i) {
                var item = JSON.parse(o.widget_info);
                if (item.widgetInfo.type == 'chart') { $scope.Tabular.GenerateHighchart(item, item.chartInfo.type); }
                else if (item.widgetInfo.type == 'text') { $scope.Tabular.Text.GenerateText(item); }
                else if (item.widgetInfo.type == 'table') $scope.Tabular.Table.GenerateTable(item);
            })
        });
    }
    //$scope.LoadDashboardO();

    $scope.SaveDashboard = function (ev) {
        var arr = [];
        angular.forEach($scope.GlobalWidgetArray, function (o) {
            arr.push(o.modalData);
        });
        $mdDialog.show({
            controller: "SaveDashboardController",
            templateUrl: "angular/Dialogs/SaveDashboard/saveDashboard.html",
            locals: {
                svg: $scope.SVG,
                toms: $scope.ToMS,
                widgetArray: arr,
                theme: $scope.ColorTheme
            },
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        })
        .then(function (response) {
        }, function () { });
    }

    $scope.GetStoplightIndexOf = function (o, stoplightInfo) {
        return stoplightInfo.columns.indexOf(o);
    }


    /* DIO TESTS */
    //$scope.ToggleCreateModal('table', 'create');
    $scope.LoadDashboard();
    /* END OF DIO TESTS */


    /* Angular Gridstack */
    $scope.gridstackOptions = {
        animate: true,
        placeholderClass: "grid-stack-placeholder",
        handleClass: "grid-stack-item-content",
        resizable: {
            handles: 'e, se, s, sw, w'
        },
        staticGrid: true
    }
    //$scope.widgets = [{ x: 0, y: 0, width: 5, height: 2 }, { x: 0, y: 0, width: 5, height: 2 }];
    $scope.widgets = [];
    $scope.options = {
        cell_height: 10,
        vertical_margin: 10
    };

    //dont open this function omg.

    $scope.RemoveWidget = function (w) {
        var index = $scope.GlobalWidgetArray.indexOf(w);
        $scope.ThreadArray[w.id].stop();
        $scope.GlobalWidgetArray.splice(index, 1);
        delete $scope.ThreadArray[w.id];
    }

    $scope.RemoveWidgetByIndex = function (w) {
        var index = w;
        $scope.ThreadArray[w.id].stop();
        $scope.ThreadArray[w.id] = {};
        $scope.GlobalWidgetArray.splice(index, 1);
    }

    $scope.UpdateWidget = function (w, ev) {
        angular.forEach($scope.ThreadArray, function (o, i) {
            o.stop();
        })
        var index = $scope.GlobalWidgetArray.indexOf(w),
            ctrl = "",
            template = "";
        if (w.type == 'table') {
            ctrl = "TableUpdateController";
            template = 'angular/Dialogs/Table/tableUpdate.html';
        } else if (w.type == 'text') {
            ctrl = "UpdateTextFamilyController";
            template = 'angular/Dialogs/Charts/TextFamily/textFamilyUpdate.html';
        } else if (w.type == 'chart') {
            switch (w.modalData.chartInfo.type) {
                case "map":
                    ctrl = "MapFamilyController";
                    template = "angular/Dialogs/Maps/mapFamily.html";
                    break;
                case "multiform":
                    ctrl = "UpdateMultiformFamilyController";
                    template = 'angular/Dialogs/Charts/MultiformFamily/multiformUpdate.html';
                    break;
                    /*
                    Arvin Pogi START
                    */
                case "pie":
                    ctrl = "UpdatePieFamilyController";
                    template = 'angular/Dialogs/Charts/PieFamily/pieUpdate.html';
                    break;
                    /*
                    Arvin Pogi END
                    */
                case "line":
                    ctrl = "UpdateLineFamilyController";
                    template = 'angular/Dialogs/Charts/LineFamily/lineUpdate.html';
                    break;
                case "bar":
                    ctrl = "UpdateBarFamilyController";
                    template = 'angular/Dialogs/Charts/BarFamily/barUpdate.html';
                    break;
                case "bubble":
                    ctrl = "BubbleUpdateController";
                    template = 'angular/Dialogs/Charts/BubbleFamily/bubbleUpdate.html';
                    break;
                case "heatmap":
                    ctrl = "UpdateHeatmapController";
                    template = 'angular/Dialogs/Charts/Heatmap/heatmapUpdate.html';
                    break;
                case "highchartsplay":
                    ctrl = "HighchartsPlayController";
                    template = 'angular/Dialogs/HighchartsPlay/highchartsPlay.html';
                    break;
                default: break;
            }
        }
        /*KYLE CODE END*/
        $mdDialog.show({
            controller: ctrl,
            templateUrl: template,
            locals: {
                callstate: "update",
                svg: $scope.SVG,
                toms: $scope.ToMS,
                modalData: $scope.GlobalWidgetArray[index].modalData
            },
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        })
        .then(function (response) {
            if (response != undefined) {
                //RESPONSE = DATA FROM MODAL $MDDIALOG.HIDE(DATA)
                $scope.GlobalWidgetArray[index].modalData = response;
                $scope.GlobalWidgetArray[index].id = w.id;
                $scope.RefreshWidget($scope.GlobalWidgetArray[index]);
                $scope.ThreadArray[$scope.GlobalWidgetArray[index].id].stop();
                angular.forEach($scope.ThreadArray, function (o, i) {
                    o.start();
                });
            }
        }, function () {
            angular.forEach($scope.ThreadArray, function (o, i) {
                o.start();
            });
        });
    }

    $scope.RefreshWidget = function (w) {
        $scope.ThreadArray[w.id].stop();
        if (w.type == 'table') {
            $scope.Tabular.Table.Refresh(w.modalData);
            $scope.ThreadArray[w.id] = {
                int: {},
                start: function () {
                    this.int = $interval(function () {
                        $scope.Tabular.Table.Refresh(w.modalData)
                    }, w.modalData.refreshInfo.interval.value);
                },
                stop: function () {
                    $interval.cancel(this.int);
                }
            };
        } else if (w.type == 'text') {
            $scope.Tabular.Text.Refresh(w.modalData);
            $scope.ThreadArray[w.id] = {
                int: {},
                start: function () {
                    this.int = $interval(function () {
                        $scope.Tabular.Text.Refresh(w.modalData)
                    }, w.modalData.refreshInfo.interval.value);
                },
                stop: function () {
                    $interval.cancel(this.int);
                }
            };
        } else if (w.type == 'chart') {
            switch (w.modalData.chartInfo.type) {
                case "map":
                    break;
                case "multiform":
                    $scope.Tabular.MultiformChart.Refresh(w.modalData);
                    $scope.ThreadArray[w.id] = {
                        int: {},
                        start: function () {
                            this.int = $interval(function () {
                                $scope.Tabular.MultiformChart.Refresh(w.modalData);
                            }, w.modalData.refreshInfo.interval.value);
                        },
                        stop: function () {
                            $interval.cancel(this.int);
                        }
                    }
                    break;
                case "heatmap":
                    $scope.Tabular.Heatmap.Refresh(w.modalData);
                    $scope.ThreadArray[w.id] = {
                        int: {},
                        start: function () {
                            this.int = $interval(function () {
                                $scope.Tabular.Heatmap.Refresh(w.modalData);
                            }, w.modalData.refreshInfo.interval.value);
                        },
                        stop: function () {
                            $interval.cancel(this.int);
                        }
                    }
                    break;
                case "line":
                    $scope.Tabular.LineChart.Refresh(w.modalData);
                    $scope.ThreadArray[w.id] = {
                        int: {},
                        start: function () {
                            this.int = $interval(function () {
                                $scope.Tabular.LineChart.Refresh(w.modalData);
                            }, w.modalData.refreshInfo.interval.value);
                        },
                        stop: function () {
                            $interval.cancel(this.int);
                        }
                    }
                    break;
                case "bar":
                    $scope.Tabular.BarChart.Refresh(w.modalData);
                    $scope.ThreadArray[w.id] = {
                        int: {},
                        start: function () {
                            this.int = $interval(function () {
                                $scope.Tabular.BarChart.Refresh(w.modalData);
                            }, w.modalData.refreshInfo.interval.value);
                        },
                        stop: function () {
                            $interval.cancel(this.int);
                        }
                    }
                    break;
                case "bubble":
                    $scope.Tabular.BubbleChart.Refresh(w.modalData);
                    $scope.ThreadArray[w.id] = {
                        int: {},
                        start: function () {
                            this.int = $interval(function () {
                                $scope.Tabular.BubbleChart.Refresh(w.modalData);
                            }, w.modalData.refreshInfo.interval.value);
                        },
                        stop: function () {
                            $interval.cancel(this.int);
                        }
                    }
                    break;
                case "pie":
                    $scope.Tabular.LineChart.Refresh(w.modalData);
                    $scope.ThreadArray[w.id] = {
                        int: {},
                        start: function () {
                            this.int = $interval(function () {
                                $scope.Tabular.PieChart.Refresh(w.modalData);
                            }, w.modalData.refreshInfo.interval.value);
                        },
                        stop: function () {
                            $interval.cancel(this.int);
                        }
                    }
                    break;
                default: break;
            }
        }
        $scope.ThreadArray[w.id].start();
    }

    $scope.onChange = function (event, items) {
        try { $("#" + $scope.GlobalWidgetArray[items[0]._id - 1].chartData.chart.renderTo).highcharts().reflow(); } catch (e) { }
    };

    $scope.onDragStart = function (event, ui) {
    };

    $scope.onDragStop = function (event, ui) {
        //console.log("onDragStop event: " + event + " ui:" + ui);
    };

    $scope.onResizeStart = function (event, ui, w) {
        ////console.log("onResizeStart event: " + event + " ui:" + ui);
        //var hcd = angular.copy(w.data);
        //w.data = {};
        //w.data = hcd;
    };

    $scope.onResizeStop = function (event, ui) {
        //$("#" + $scope.widgets[items[0]._id - 1].id).highcharts().reflow();
    };

    $scope.onItemAdded = function (item) {
    };

    $scope.onItemResize = function (item) {
    };

    $scope.onItemRemoved = function (item) {
    };
    /* End of Angular Gridstack */

    $scope.ResetThemes = function () {
        $scope.ColorTheme = angular.copy($scope.DefaultColorTheme);
    }

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