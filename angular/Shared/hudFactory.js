/* Factory */
var hudFactory = angular.module('HUD-Factory', []); //
hudFactory.factory('DataFactory', ['$http', 'ConfigurableItems', function ($http, config) {
    GeneratePlotLines = function (axis, data) {
        var arr = [];
        angular.forEach(data, function (o) {
            var textAlign = "";
            arr.push({
                id: o.id,
                width: o.width, value: o.value,
                dashStyle: o.dashStyle.toLowerCase(),
                color: o.color,                         //Color         // Background Color
                label: {
                    align: o.align.toLowerCase(),
                    textAlign: o.textAlign.toLowerCase(),
                    verticalAlign: o.verticalAlign.toLowerCase(),
                    rotation: o.rotation,
                    text: o.text,                      //String
                    style: {
                        color: config.ColorTheme.labels.main
                    },                    //{}              CSS Style
                }
            });
        })
        return arr;
    };
    GeneratePlotBands = function (axis, data) {
        var arr = [];
        angular.forEach(data, function (o) {
            arr.push({
                id: o.id,
                from: o.from,                          //Number
                to: o.to,                            //Number
                color: o.color,                         //Color         // Background Color
                label: {
                    rotation: o.rotation,
                    text: o.text,                      //String
                    style: {
                        color: config.ColorTheme.labels.main
                    },                    //{}              CSS Style
                }
            });
        })
        return arr;
    };

    return {
        //Feedback
        SampleGET: function () {
            return $http({
                url: "url/sampleget",
                method: 'GET'
            });
        },
        SamplePOST: function (obj) {
            return $http({
                method: "POST",
                url: "url/samplepost",
                data: obj,
            });
        },


        //Data Getter
        GetData: function (webserviceUrl, method) {
            return $http({
                url: webserviceUrl,
                method: method
            });
        },

        //Dashboard Getter
        LoadDashboardSample: function () {
            return $http({
                url: "dashboard/d2.json",
                method: "GET"
            });
        },
        LoadD1: function () {
            return $http({
                url: "dashboard/d1.json",
                method: "GET"
            });
        },
        //Highchart Feature Creators

        //Save Dashboard
        LoadFromDBD1: function (o) {
            return $http({
                url: "http://localhost:8080/HUD-Painter-v4/loadDashboard",
                method: "POST",
                data: o,
            });
        },
        SaveDashboard: function (o) {
            return $http({
                method: "POST",
                url: "http://localhost:8080/HUD-Painter-v4/saveDashboard",
                data: o,
            });
        },

        //Highchart Tabular Data Creator
        BarFamily: {
            GenerateTabularHighchartData: function (typeinfo) {
                var mainChart = {
                    series: [],
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: typeinfo.id,
                        type: typeinfo.type.toLowerCase(),
                        animation: true,                    //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            stacking: typeinfo.stacking,                //String            "none", "normal", "percentage" 
                        }
                    },
                    xAxis: {
                        categories: typeinfo.categories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', typeinfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', typeinfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', typeinfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', typeinfo.plotBands.y),
                    }
                };

                return mainChart;
            },
            GenerateTabularRawSeries: function (refresh_info, tabular_data, rawdata) {
                var parsedData = [];

                angular.forEach(tabular_data.rows, function (o, i) {
                    var data = [];
                    angular.forEach(tabular_data.columns, function (oo) {
                        data.push(rawdata[o][oo]);
                    });
                    parsedData.push({
                        name: rawdata[o][tabular_data.label],
                        data: data,
                        color: tabular_data.color[i],
                        dashStyle: tabular_data.dashStyle[i],
                        lineWidth: tabular_data.lineWidth[i],
                        marker: {
                            symbol: tabular_data.symbol[i],
                            radius: tabular_data.radius[i],
                        }
                    });
                });

                return parsedData;
            }
        },
        LineFamily: {
            GenerateTabularHighchartData: function (typeinfo) {
                var mainChart = {
                    series: [],
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: typeinfo.id,
                        type: typeinfo.type.toLowerCase(),
                        animation: true,                    //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            stacking: typeinfo.stacking,                //String            "none", "normal", "percentage" 
                        }
                    },
                    xAxis: {
                        categories: typeinfo.categories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', typeinfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', typeinfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', typeinfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', typeinfo.plotBands.y),
                    }
                };

                return mainChart;
            },
            GenerateTabularRawSeries: function (refresh_info, tabular_data, rawdata) {
                var parsedData = [];

                angular.forEach(tabular_data.rows, function (o, i) {
                    var data = [];
                    angular.forEach(tabular_data.columns, function (oo) {
                        data.push(rawdata[o][oo]);
                    });
                    parsedData.push({
                        name: rawdata[o][tabular_data.label],
                        data: data,
                        color: tabular_data.color[i],
                        dashStyle: tabular_data.dashStyle[i],
                        lineWidth: tabular_data.lineWidth[i],
                        marker: {
                            symbol: tabular_data.symbol[i],
                            radius: tabular_data.radius[i],
                        }
                    });
                });

                return parsedData;
            }
        },
        BubbleFamily: {
            GenerateTabularHighchartData: function (typeinfo) {
                var tooltiphtml = "";
                if (typeinfo.type.toLowerCase() == 'bubble') {
                    tooltiphtml = '<h3>{point.name}</h3></hr>' +
                            '<span>' + typeinfo.xname + ' : </span><span>{point.x}</span></br>' +
                            '<span>' + typeinfo.yname + ' : </span><span>{point.y}</span></br>' +
                            '<span>' + typeinfo.zname + ' : </span><span>{point.z}</span></br>';
                } else {
                    tooltiphtml = '<tr><td colspan="2"><h3>{point.name}</h3></td></tr>' +
                            '<tr><td>' + typeinfo.xname + ':</td><td>{point.x}</td></tr>' +
                            '<tr><td>' + typeinfo.yname + ':</td><td>{point.y}</td></tr>';
                }
                var mainChart = {
                    series: [],
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: typeinfo.id,
                        type: typeinfo.type.toLowerCase(),
                        animation: true,                    //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        }
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true,
                        useHTML: true,
                        headerFormat: '',
                        pointFormat: tooltiphtml,
                        footerFormat: '',
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        //useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    },
                    xAxis: {
                        //categories: typeinfo.categories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', typeinfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', typeinfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', typeinfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', typeinfo.plotBands.y),
                    }
                };

                return mainChart;
            },
            GenerateTabularRawSeries: function (refresh_info, tabular_data, rawdata, type) {
                //{
                //    x: 1,
                //    y: 1,
                //    z: 1,
                //    name: "Point2",
                //    color: "#00FF00"
                //}
                var parsedData = [];
                if (type == 'Bubble') {
                    angular.forEach(tabular_data.rows, function (o, i) {
                        parsedData.push({
                            name: rawdata[o][tabular_data.columns.name],
                            color: tabular_data.color[o],
                            data: [{
                                x: rawdata[o][tabular_data.columns.x],
                                y: rawdata[o][tabular_data.columns.y],
                                z: rawdata[o][tabular_data.columns.z],
                                name: rawdata[o][tabular_data.columns.name],
                                color: tabular_data.color[o],

                            }]
                        });
                    });
                }
                else if (type == 'Scatter') {
                    angular.forEach(tabular_data.rows, function (o, i) {
                        parsedData.push({
                            name: rawdata[o][tabular_data.columns.name],
                            marker: {
                                symbol: tabular_data.symbol[o],
                                radius: tabular_data.radius[o],
                            },
                            color: tabular_data.color[o],
                            data: [{
                                x: rawdata[o][tabular_data.columns.x],
                                y: rawdata[o][tabular_data.columns.y],
                                z: rawdata[o][tabular_data.columns.z],
                                name: rawdata[o][tabular_data.columns.name],
                                color: tabular_data.color[o]
                            }]
                        });
                    });
                }

                return parsedData;
            }
        },
        /*
        KYLE'S CODE START
        */
        Heatmap: {
            GenerateTabularHighchartData: function (typeinfo, tabular_data, rawdata) {
                var yAxisCategories = [];
                angular.forEach(tabular_data.rows, function (o, i) {
                    yAxisCategories.push(rawdata[o][tabular_data.label]);
                });

                var colorAxis = {};
                if (typeinfo.colorAxis.type == "gradient") {
                    colorAxis.stops = [];
                    if (typeinfo.colorAxis.gradientInfo.minEnabled) { colorAxis.min = typeinfo.colorAxis.gradientInfo.min; }
                    if (typeinfo.colorAxis.gradientInfo.maxEnabled) { colorAxis.max = typeinfo.colorAxis.gradientInfo.max; }

                    var sortedStops = _.sortBy(typeinfo.colorAxis.gradientInfo.stops, 'position');

                    angular.forEach(sortedStops, function (o, i) {
                        colorAxis.stops.push([
                            o.position / 100,
                            o.color
                        ]);
                    });
                } else if (typeinfo.colorAxis.type == "categorized") {
                    colorAxis.dataClasses = [];
                    if (typeinfo.colorAxis.categorizedInfo.colorOption == "minMax") {
                        colorAxis.minColor = typeinfo.colorAxis.categorizedInfo.minColor;
                        colorAxis.maxColor = typeinfo.colorAxis.categorizedInfo.maxColor;
                    }
                    angular.forEach(typeinfo.colorAxis.categorizedInfo.dataClasses, function (o, i) {
                        var dataClass = {};

                        if (!(o.from === null || o.from === undefined)) { dataClass.from = o.from; }
                        if (!(o.to === null || o.to === undefined)) { dataClass.to = o.to; }
                        if (typeinfo.colorAxis.categorizedInfo.colorOption == "perClass") { dataClass.color = o.color; }
                        if (typeinfo.colorAxis.categorizedInfo.nameEnabled) { dataClass.name = o.name; }

                        colorAxis.dataClasses.push(dataClass);
                    });
                }
                var mainChart = {
                    series: [],
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: typeinfo.id,
                        type: typeinfo.type.toLowerCase(),
                        animation: true,                    //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    colorAxis: colorAxis,
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            stacking: typeinfo.stacking,                //String            "none", "normal", "percentage" 
                        }
                    },
                    xAxis: {
                        categories: typeinfo.categories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                    },
                    yAxis: {
                        categories: yAxisCategories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                    }
                };

                return mainChart;
            },
            GenerateTabularRawSeries: function (refresh_info, tabular_data, rawdata) {
                var parsedData = [{
                    name: "placeholder",
                    data: [],
                }];
                angular.forEach(tabular_data.rows, function (o, i) {
                    angular.forEach(tabular_data.columns, function (oo, ii) {
                        parsedData[0].data.push([ii, i, rawdata[o][oo]]);
                    });
                });
                // angular.forEach(tabular_data.rows, function (o, i) {
                //     var data = [];
                //     angular.forEach(tabular_data.columns, function (oo) {
                //         data.push(rawdata[o][oo]);
                //     });
                //     parsedData.push({
                //         name: rawdata[o][tabular_data.label],
                //         data: data,
                //         color: tabular_data.color[i],
                //     });
                // });
                return parsedData;
            }
        }
        /*
        KYLE'S CODE END
        */
    }
}]);
hudFactory.factory('TabularFactory', ['$http', 'ConfigurableItems', function ($http, config) {

    GeneratePlotLines = function (axis, data) {
        var arr = [];
        angular.forEach(data, function (o) {
            var textAlign = "";
            arr.push({
                id: o.id,
                width: o.width, value: o.value,
                dashStyle: o.dashStyle.toLowerCase(),
                color: o.color,                         //Color         // Background Color
                label: {
                    align: o.align.toLowerCase(),
                    textAlign: o.textAlign.toLowerCase(),
                    verticalAlign: o.verticalAlign.toLowerCase(),
                    rotation: o.rotation,
                    text: o.text,                      //String
                    style: {
                        color: config.ColorTheme.labels.main
                    },                    //{}              CSS Style
                }
            });
        })
        return arr;
    };
    GeneratePlotBands = function (axis, data) {
        var arr = [];
        angular.forEach(data, function (o) {
            arr.push({
                id: o.id,
                from: o.from,                          //Number
                to: o.to,                            //Number
                color: o.color,                         //Color         // Background Color
                label: {
                    rotation: o.rotation,
                    text: o.text,                      //String
                    style: {
                        color: config.ColorTheme.labels.main
                    },                    //{}              CSS Style
                }
            });
        })
        return arr;
    };

    return {
        //Feedback
        SampleGET: function () {
            return $http({
                url: "url/sampleget",
                method: 'GET'
            });
        },
        SamplePOST: function (obj) {
            return $http({
                method: "POST",
                url: "url/samplepost",
                data: obj,
            });
        },


        //Data Getter
        GetData: function (webserviceUrl, method) {
            return $http({
                url: webserviceUrl,
                method: method
            });
        },

        GenerateEmptyChart: function (id) {
            var mainChart = {
                series: [],
                chart: {
                    style: {
                        color: config.ColorTheme.labels.main
                    },
                    spacingTop: 20,
                    spacingLeft: 20,
                    spacingRight: 20,
                    spacingBottom: 20,
                    renderTo: id,
                    //type: chartInfo.type.toLowerCase(),
                    animation: false,                   //Boolean
                    backgroundColor: "transparent",     //Color
                    borderColor: "transparent",         //Color
                    borderRadius: 0,                    //Number
                    borderWidth: 0,                     //Number
                    inverted: false                     //Boolean   
                },
                credits: {
                    enabled: false,
                    href: "",
                    text: "",
                    position: {
                        align: "center",
                        verticalAlign: "middle",
                        x: 0,
                        y: 0,
                    }
                },
                tooltip: {
                    style: {
                        color: config.ColorTheme.labels.main,
                    },
                    enabled: true,                       //Boolean
                    valuePrefix: "",                     //String
                    valueSuffix: "",                     //String
                    valueDecimals: 2,                    //Number
                    backgroundColor: config.ColorTheme.container.background,      //Color
                    borderColor: config.ColorTheme.container.border.color,            //Color
                    borderRadius: config.ColorTheme.container.border.radius,                     //Number
                    borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                    shared: true
                },
                legend: {
                    enabled: true,                       //Boolean
                    align: "center",                     //String
                    floating: false,                   //Boolean
                    backgroundColor: "transparent",      //Color
                    borderColor: "transparent",            //Color
                    borderRadius: 0,                     //Number
                    borderWidth: 0,                      //Number
                    itemStyle: {
                        color: config.ColorTheme.labels.main,
                        opacity: 1,
                        "text-decoration": "none"
                    },
                    itemHoverStyle: {
                        color: config.ColorTheme.functional.primary
                    },
                    itemHiddenStyle: {
                        color: config.ColorTheme.labels.main,
                        opacity: 0.5,
                        "text-decoration": "line-through"
                    }
                },
                exporting: {
                    enabled: false,                       //Boolean
                    buttons: {
                        contextButtons: {
                            symbolFill: config.ColorTheme.functional.primary,       //Color
                            symbolSize: 10,              //Number
                            symbolStroke: "solid",       //String
                        }
                    }
                },
                title: {
                    text: "",
                    floating: true,
                    style: {
                        color: config.ColorTheme.labels.subtle,
                        'fontSize': '1em'
                    },
                    useHTML: true,
                    x: -27,
                    y: 8,
                    //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                },
                plotOptions: {
                    series: {
                        //stacking: chartInfo.stacking,                //String            "none", "normal", "percentage" 
                    }
                },
                xAxis: {
                    categories: [],
                    visible: true,                      //Boolean
                    gridLineWidth: 0.5,                 //Number
                    grindLineColor: config.ColorTheme.labels.subtle,        //Color
                    lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                    lineWidth: 1,                       //Number
                    tickColor: config.ColorTheme.labels.main,             //Color
                    type: "linear",                     //String            "linear", "datetime", "logarithmic"
                    allowDecimals: false,               //Boolean
                    //min:,                             //Number
                    //max:,                             //Number
                    reversed: false,                    //Boolean
                    crosshair: {                        // Set to false to remove
                        color: config.ColorTheme.labels.subtle,             //Color
                        width: 0.5,                       //Number
                        dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                    },
                    title: {
                        text: ""
                    },
                    labels: {
                        style: {
                            color: config.ColorTheme.labels.main,             //Color
                        },
                        enabled: true,               //Boolean
                        align: "center",                //String
                        //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                        //valueSuffix:,                 //String            // NOT PLUG N PLAY
                    },
                },
                yAxis: {
                    visible: true,                      //Boolean
                    gridLineWidth: 0.5,                 //Number
                    grindLineColor: config.ColorTheme.labels.subtle,        //Color
                    lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                    lineWidth: 1,                       //Number
                    tickColor: config.ColorTheme.labels.main,             //Color
                    type: "linear",                     //String            "linear", "datetime", "logarithmic"
                    allowDecimals: false,               //Boolean
                    //min:,                             //Number
                    //max:,                             //Number
                    reversed: false,                    //Boolean
                    crosshair: {                        // Set to false to remove
                        color: config.ColorTheme.functional.primary,             //Color
                        width: 0.5,                       //Number
                        dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                    },
                    title: {
                        text: ""
                    },
                    labels: {
                        style: {
                            color: config.ColorTheme.labels.main,             //Color
                        },
                        enabled: true,                  //Boolean
                        align: "center",                //String
                        //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                        //valueSuffix:,                 //String            // NOT PLUG N PLAY
                    },
                }
            };

            return mainChart;
        },

        //Thread Manager
        GenerateThread: function () { },
        KillThread: function () { },

        //Highchart Feature Creators
        LineFamily: {
            GenerateSeries: function (originalData, tabularInfo) {
                var parsedData = [];
                angular.forEach(tabularInfo.rows, function (o, i) {
                    var data = [];
                    angular.forEach(tabularInfo.columns, function (oo) {
                        data.push(originalData[o][oo]);
                    });
                    parsedData.push({
                        type: tabularInfo.type,
                        stacking: tabularInfo.stacking,
                        name: originalData[o][tabularInfo.label],
                        data: data,
                        color: tabularInfo.color[i],
                        dashStyle: tabularInfo.dashStyle[i],
                        lineWidth: tabularInfo.lineWidth[i],
                        marker: {
                            symbol: tabularInfo.symbol[i],
                            radius: tabularInfo.radius[i],
                        }
                    });
                });
                return parsedData;
            },
            GenerateChart: function (chartInfo, tabularInfo, series) {
                var mainChart = {
                    series: series,
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: chartInfo.id,
                        //type: chartInfo.type.toLowerCase(),
                        animation: false,                   //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            //stacking: chartInfo.stacking,                //String            "none", "normal", "percentage" 
                        }
                    },
                    xAxis: {
                        categories: tabularInfo.columns,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', chartInfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', chartInfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', chartInfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', chartInfo.plotBands.y),
                    }
                };

                return mainChart;
            }
        },
        BarFamily: {
            GenerateSeries: function (originalData, tabularInfo) {
                var parsedData = [];
                angular.forEach(tabularInfo.rows, function (o, i) {
                    var data = [];
                    angular.forEach(tabularInfo.columns, function (oo) {
                        data.push(originalData[o][oo]);
                    });
                    parsedData.push({
                        type: tabularInfo.type,
                        stacking: tabularInfo.stacking,
                        name: originalData[o][tabularInfo.label],
                        data: data,
                        color: tabularInfo.color[i],
                    });
                });
                return parsedData;
            },
            GenerateChart: function (chartInfo, tabularInfo, series) {
                var mainChart = {
                    series: series,
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: chartInfo.id,
                        //type: chartInfo.type.toLowerCase(),
                        animation: false,                   //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            //stacking: chartInfo.stacking,                //String            "none", "normal", "percentage" 
                        }
                    },
                    xAxis: {
                        categories: tabularInfo.columns,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', chartInfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', chartInfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', chartInfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', chartInfo.plotBands.y),
                    }
                };

                return mainChart;
            }
        },
        MultiformFamily: {
            GenerateSeries: function (originalData, tabularInfo) {
                var parsedData = [];
                angular.forEach(tabularInfo.rows, function (o, i) {
                    var data = [];
                    angular.forEach(tabularInfo.columns, function (oo) {
                        data.push(originalData[o][oo]);
                    });
                    switch (tabularInfo.type[i]) {
                        case "line":
                        case "spline":
                        case "areaspline":
                        case "area":
                            parsedData.push({
                                zIndex: tabularInfo.zIndex[i],
                                type: tabularInfo.type[i],
                                stacking: tabularInfo.stacking[i],
                                name: originalData[o][tabularInfo.label],
                                data: data,
                                color: tabularInfo.color[i],
                                dashStyle: tabularInfo.dashStyle[i],
                                lineWidth: tabularInfo.lineWidth[i],
                                marker: {
                                    symbol: tabularInfo.symbol[i],
                                    radius: tabularInfo.radius[i],
                                }
                            }); break;
                        case "column":
                        case "bar":
                            parsedData.push({
                                zIndex: tabularInfo.zIndex[i],
                                type: tabularInfo.type[i],
                                stacking: tabularInfo.stacking[i],
                                name: originalData[o][tabularInfo.label],
                                data: data,
                                color: tabularInfo.color[i]
                            }); break;
                        case "bubble":
                            parsedData.push({
                                zIndex: tabularInfo.zIndex[i],
                                type: 'bubble',
                                stacking: tabularInfo.stacking[i],
                                name: originalData[o][tabularInfo.label],
                                data: data,
                                color: tabularInfo.color[i],
                                dashStyle: "",
                                lineWidth: 0,
                                marker: {
                                    symbol: tabularInfo.symbol[i],
                                    radius: tabularInfo.radius[i],
                                }
                            });
                        case "scatter":
                            parsedData.push({
                                zIndex: tabularInfo.zIndex[i],
                                type: 'scatter',
                                stacking: tabularInfo.stacking[i],
                                name: originalData[o][tabularInfo.label],
                                data: data,
                                color: tabularInfo.color[i],
                                dashStyle: "",
                                lineWidth: 0,
                                marker: {
                                    symbol: tabularInfo.symbol[i],
                                    radius: tabularInfo.radius[i],
                                }
                            }); break;
                    }
                });
                return parsedData;
            },
            GenerateChart: function (chartInfo, tabularInfo, series) {
                var mainChart = {
                    series: series,
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: chartInfo.id,
                        //type: chartInfo.type.toLowerCase(),
                        animation: false,                   //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            //stacking: chartInfo.stacking,                //String            "none", "normal", "percentage" 
                        }
                    },
                    xAxis: {
                        categories: tabularInfo.columns,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', chartInfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', chartInfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', chartInfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', chartInfo.plotBands.y),
                    }
                };

                return mainChart;
            }
        },
        BubbleFamily: {
            GenerateSeries: function (originalData, tabularInfo) {
                var parsedData = [];
                if (tabularInfo.type == 'bubble') {
                    angular.forEach(tabularInfo.rows, function (o, i) {
                        parsedData.push({
                            type: 'bubble',
                            name: originalData[o][tabularInfo.label],
                            color: tabularInfo.color[o],
                            data: [{
                                x: originalData[o][tabularInfo.columns.x],
                                y: originalData[o][tabularInfo.columns.y],
                                z: originalData[o][tabularInfo.columns.z],
                                name: originalData[o][tabularInfo.columns.name],
                                color: tabularInfo.color[o],
                            }]
                        });
                    });
                }
                else if (tabularInfo.type == 'scatter') {
                    angular.forEach(tabularInfo.rows, function (o, i) {
                        parsedData.push({
                            type: 'scatter',
                            name: originalData[o][tabularInfo.columns.name],
                            marker: {
                                symbol: tabularInfo.symbol[o],
                                radius: tabularInfo.radius[o],
                            },
                            color: tabularInfo.color[o],
                            data: [{
                                x: originalData[o][tabularInfo.columns.x],
                                y: originalData[o][tabularInfo.columns.y],
                                z: originalData[o][tabularInfo.columns.z],
                                name: originalData[o][tabularInfo.columns.name],
                                color: tabularInfo.color[o]
                            }]
                        });
                    });
                }

                return parsedData;
            },
            GenerateChart: function (chartInfo, tabularInfo, series) {
                var tooltiphtml = "";
                if (chartInfo.type.toLowerCase() == 'bubble') {
                    tooltiphtml = '<h3>{point.name}</h3></hr>' +
                            '<span>' + chartInfo.xname + ' : </span><span>{point.x}</span></br>' +
                            '<span>' + chartInfo.yname + ' : </span><span>{point.y}</span></br>' +
                            '<span>' + chartInfo.zname + ' : </span><span>{point.z}</span></br>';
                } else {
                    tooltiphtml = '<tr><td colspan="2"><h3>{point.name}</h3></td></tr>' +
                            '<tr><td>' + chartInfo.xname + ':</td><td>{point.x}</td></tr>' +
                            '<tr><td>' + chartInfo.yname + ':</td><td>{point.y}</td></tr>';
                }
                var mainChart = {
                    series: series,
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: chartInfo.id,
                        //type: chartInfo.type.toLowerCase(),
                        animation: true,                    //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        }
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true,
                        useHTML: true,
                        headerFormat: '',
                        pointFormat: tooltiphtml,
                        footerFormat: '',
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        //useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    xAxis: {
                        //categories: chartInfo.categories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', chartInfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', chartInfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', chartInfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', chartInfo.plotBands.y),
                    }
                };

                return mainChart;
            }
        },
        /*
       Arvin Pogi START
       */
        PieFamily: {
            GenerateSeries: function (originalData, tabularInfo) {

                var parsedData = [];
                var result = [];
                var categ = [];
                var yTotal = 0;

                angular.forEach(tabularInfo.rows, function (o, i) {
                    categ.push(originalData[o][tabularInfo.label]);

                    angular.forEach(tabularInfo.columns, function (value, key) {
                        yTotal += originalData[o][tabularInfo.columns[key]];

                    });
                    result.push({
                        name: originalData[o][tabularInfo.label],
                        y: yTotal,
                        color: tabularInfo.color[i]
                    });
                    yTotal = 0;
                });


                if (tabularInfo.type == "pie") {
                    parsedData.push({ startAngle: 0, endAngle: 360, center: ['50%', '50%'], innerSize: '0%', data: result });

                }

                else if (tabularInfo.type == "donut") {
                    parsedData.push({ startAngle: 0, endAngle: 360, center: ['50%', '50%'], innerSize: '50%', data: result });
                }

                else if (tabularInfo.type == "semi_circle_donut") {
                    parsedData.push({ startAngle: -90, endAngle: 90, center: ['50%', '75%'], innerSize: '50%', data: result });
                }

                //console.log(categ);

                return parsedData;


            },
            GenerateChart: function (chartInfo, tabularInfo, series) {

                var mainChart = {
                    series: series,
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: chartInfo.id,
                        type: chartInfo.type.toLowerCase(),
                        animation: false,                   //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            //stacking: chartInfo.stacking,                //String            "none", "normal", "percentage" 
                        },

                        pie: {
                            showInLegend: true,
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            }
                        }

                    },
                    xAxis: {
                        categories: tabularInfo.columns,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('x', chartInfo.plotLines.x),
                        plotBands: GeneratePlotBands('x', chartInfo.plotBands.x),
                    },
                    yAxis: {
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                        plotLines: GeneratePlotLines('y', chartInfo.plotLines.y),
                        plotBands: GeneratePlotBands('y', chartInfo.plotBands.y),
                    }
                };

                return mainChart;
            }
        },
        /*
       Arvin Pogi END
       */
        /*
        KYLE'S CODE START
        */
        Heatmap: {
            GenerateSeries: function (originalData, tabularInfo) {
                var parsedData = [{
                    name: "placeholder",
                    data: [],
                }];
                angular.forEach(tabularInfo.rows, function (o, i) {
                    angular.forEach(tabularInfo.columns, function (oo, ii) {
                        parsedData[0].data.push([ii, i, originalData[o][oo]]);
                    });
                });
                return parsedData;
            },
            GenerateChart: function (chartInfo, tabularInfo, series, originalData) {
                var yAxisCategories = [];
                angular.forEach(tabularInfo.rows, function (o, i) {
                    yAxisCategories.push(originalData[o][tabularInfo.label]);
                });

                var colorAxis = {};
                if (chartInfo.colorAxis.type == "gradient") {
                    colorAxis.stops = [];
                    if (chartInfo.colorAxis.gradientInfo.minEnabled) { colorAxis.min = chartInfo.colorAxis.gradientInfo.min; }
                    if (chartInfo.colorAxis.gradientInfo.maxEnabled) { colorAxis.max = chartInfo.colorAxis.gradientInfo.max; }

                    var sortedStops = _.sortBy(chartInfo.colorAxis.gradientInfo.stops, 'position');

                    angular.forEach(sortedStops, function (o, i) {
                        colorAxis.stops.push([
                            o.position / 100,
                            o.color
                        ]);
                    });
                } else if (chartInfo.colorAxis.type == "categorized") {
                    colorAxis.dataClasses = [];
                    if (chartInfo.colorAxis.categorizedInfo.colorOption == "minMax") {
                        colorAxis.minColor = chartInfo.colorAxis.categorizedInfo.minColor;
                        colorAxis.maxColor = chartInfo.colorAxis.categorizedInfo.maxColor;
                    }
                    angular.forEach(chartInfo.colorAxis.categorizedInfo.dataClasses, function (o, i) {
                        var dataClass = {};

                        if (!(o.from === null || o.from === undefined)) { dataClass.from = o.from; }
                        if (!(o.to === null || o.to === undefined)) { dataClass.to = o.to; }
                        if (chartInfo.colorAxis.categorizedInfo.colorOption == "perClass") { dataClass.color = o.color; }
                        if (chartInfo.colorAxis.categorizedInfo.nameEnabled) { dataClass.name = o.name; }

                        colorAxis.dataClasses.push(dataClass);
                    });
                }
                var mainChart = {
                    series: series,
                    chart: {
                        style: {
                            color: config.ColorTheme.labels.main
                        },
                        spacingTop: 20,
                        spacingLeft: 20,
                        spacingRight: 20,
                        spacingBottom: 20,
                        renderTo: chartInfo.id,
                        type: chartInfo.type.toLowerCase(),
                        animation: true,                    //Boolean
                        backgroundColor: "transparent",     //Color
                        borderColor: "transparent",         //Color
                        borderRadius: 0,                    //Number
                        borderWidth: 0,                     //Number
                        inverted: false                     //Boolean   
                    },
                    credits: {
                        enabled: false,
                        href: "",
                        text: "",
                        position: {
                            align: "center",
                            verticalAlign: "middle",
                            x: 0,
                            y: 0,
                        }
                    },
                    colorAxis: colorAxis,
                    tooltip: {
                        style: {
                            color: config.ColorTheme.labels.main,
                        },
                        enabled: true,                       //Boolean
                        valuePrefix: "",                     //String
                        valueSuffix: "",                     //String
                        valueDecimals: 2,                    //Number
                        backgroundColor: config.ColorTheme.container.background,      //Color
                        borderColor: config.ColorTheme.container.border.color,            //Color
                        borderRadius: config.ColorTheme.container.border.radius,                     //Number
                        borderWidth: config.ColorTheme.container.border.thickness,                      //Number
                        shared: true
                    },
                    legend: {
                        enabled: true,                       //Boolean
                        align: "center",                     //String
                        floating: false,                   //Boolean
                        backgroundColor: "transparent",      //Color
                        borderColor: "transparent",            //Color
                        borderRadius: 0,                     //Number
                        borderWidth: 0,                      //Number
                        itemStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 1,
                            "text-decoration": "none"
                        },
                        itemHoverStyle: {
                            color: config.ColorTheme.functional.primary
                        },
                        itemHiddenStyle: {
                            color: config.ColorTheme.labels.main,
                            opacity: 0.5,
                            "text-decoration": "line-through"
                        }
                    },
                    exporting: {
                        enabled: false,                       //Boolean
                        buttons: {
                            contextButtons: {
                                symbolFill: config.ColorTheme.functional.primary,       //Color
                                symbolSize: 10,              //Number
                                symbolStroke: "solid",       //String
                            }
                        }
                    },
                    title: {
                        text: "",
                        floating: true,
                        style: {
                            color: config.ColorTheme.labels.subtle,
                            'fontSize': '1em'
                        },
                        useHTML: true,
                        x: -27,
                        y: 8,
                        //text: '<span class="chart-title">Multicolor series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
                    },
                    plotOptions: {
                        series: {
                            stacking: chartInfo.stacking,                //String            "none", "normal", "percentage" 
                        }
                    },
                    xAxis: {
                        categories: chartInfo.categories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.labels.subtle,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,               //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                    },
                    yAxis: {
                        categories: yAxisCategories,
                        visible: true,                      //Boolean
                        gridLineWidth: 0.5,                 //Number
                        grindLineColor: config.ColorTheme.labels.subtle,        //Color
                        lineColor: config.ColorTheme.labels.main,               //Color             // Y Axis
                        lineWidth: 1,                       //Number
                        tickColor: config.ColorTheme.labels.main,             //Color
                        type: "linear",                     //String            "linear", "datetime", "logarithmic"
                        allowDecimals: false,               //Boolean
                        //min:,                             //Number
                        //max:,                             //Number
                        reversed: false,                    //Boolean
                        crosshair: {                        // Set to false to remove
                            color: config.ColorTheme.functional.primary,             //Color
                            width: 0.5,                       //Number
                            dashStyle: "solid",             //String            ['Solid', 'Dot', 'Dash', 'ShortDash', 'LongDash']
                        },
                        title: {
                            text: ""
                        },
                        labels: {
                            style: {
                                color: config.ColorTheme.labels.main,             //Color
                            },
                            enabled: true,                  //Boolean
                            align: "center",                //String
                            //valuePrefix:,                 //String            // NOT PLUG N PLAY -> convert to "formatter": function() {}
                            //valueSuffix:,                 //String            // NOT PLUG N PLAY
                        },
                    }
                };

                return mainChart;
            },
        },
        Text: {
        },
        /*
        KYLE'S CODE END
        */
    }
}]);