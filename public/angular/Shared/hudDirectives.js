/* DIRECTIVES */
var hudDirectives = angular.module('HUD-Directives', ['HUD-Factory']); //
hudDirectives.directive('ngRightClick', function ($parse) {
    return function (scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function (event) {
            scope.$apply(function () {
                event.preventDefault();
                fn(scope, { $event: event });
            });
        });
    };
});
hudDirectives.directive("hudStyles", function () {
    return {
        restrict: 'E',
        templateUrl: "angular/Shared/hudStyles.html"
    }
});
hudDirectives.directive("hudMultiformDataTabs", function () {
    return {
        restrict: 'E',
        templateUrl: "angular/Dialogs/Charts/MultiformFamily/hudMultiformDataTabs.html"
    }
});
hudDirectives.directive("hudSetter", function () {
    return {
        restrict: 'A',
        scope: {
            heightInPercent: '=',
            widthInPercent: '=',
            minheightInPercent: '=',
            minwidthInPercent: '=',
            fontInPercent: '=',
            margin: '=',
            padding: '='
        },
        replace: true,
        link: function (scope, element, attrs) {
            if (scope.heightInPercent !== undefined) {
                $(element[0]).css("height", scope.heightInPercent.toString() + "%");
            }
            if (scope.widthInPercent !== undefined) {
                $(element[0]).css("width", scope.widthInPercent.toString() + "%");
            }
            if (scope.minheightInPercent !== undefined) {
                $(element[0]).css("min-height", scope.minheightInPercent.toString() + "%");
            }
            if (scope.minwidthInPercent !== undefined) {
                $(element[0]).css("min-width", scope.minwidthInPercent.toString() + "%");
            }
            if (scope.fontInPercent !== undefined) {
                $(element[0]).css("font-size", scope.fontInPercent.toString() + "%");
            }
            if (scope.margin !== undefined) {
                $(element[0]).css("margin", scope.margin);
            }
            if (scope.padding !== undefined) {
                $(element[0]).css("padding", scope.padding);
            }
        }
    }

});
hudDirectives.directive('hudHighchart', function (ConfigurableItems) {
    colorThemes = ConfigurableItems.ColorTheme;
    return {
        restrict: 'E',
        replace: true,
        scope: { graphData: "=" },
        link: function (scope, element, attrs) {
            var chart = {};
            setTimeout(function () {
                chart = new Highcharts.Chart(scope.graphData);
            }, 500);
            //Series Watcher
            try {
                scope.$watch(
                    //Value Listener
                function () { return scope.graphData.series; },
                //Change Listener
                function (newdata, olddata) {
                    try {
                        if (newdata.length == olddata.length) {
                            //Change in Data
                            _.forEach(newdata, function (o, i) {
                                chart.series[i].update(o);
                                chart.series[i].setData(o.data);
                            })
                        }
                        else if (newdata.length > olddata.length) {
                            //Added Series
                            _.forEach(newdata, function (o, i) {
                                var index = _.findIndex(olddata, ['name', o.name]);
                                if (index == -1) {
                                    chart.addSeries(o);
                                }
                            })
                        } else {
                            //Removed Series
                            _.forEach(olddata, function (o, i) {
                                var index = _.findIndex(newdata, ['name', o.name]);
                                if (index == -1) {
                                    chart.series[i].remove();
                                }
                            })
                        }
                        chart.reflow();
                    } catch (e) { }
                }
                );

                //xAxis Watcher
                scope.$watch(
                    //Value Listener
                    function () { return scope.graphData.xAxis.plotBands; },
                    //Change Listener
                    function (newdata, olddata) {
                        try {
                            if (newdata.length > olddata.length) {
                                //Added Series
                                _.forEach(newdata, function (o, i) {
                                    var index = _.findIndex(olddata, ['id', o.id]);
                                    if (index == -1) {
                                        chart.xAxis[0].addPlotBand(o);
                                    }
                                })
                            } else if (newdata.length < olddata.length) {
                                //Removed Series
                                _.forEach(olddata, function (o, i) {
                                    var index = _.findIndex(newdata, ['id', o.id]);
                                    if (index == -1) {
                                        console.log(o);
                                        chart.xAxis[0].removePlotBand(o.id);
                                    }
                                })
                            }
                            //chart.reflow();
                        } catch (e) { }
                    }
                )
                scope.$watch(
                    //Value Listener
                    function () { return scope.graphData.xAxis.plotLines; },
                    //Change Listener
                    function (newdata, olddata) {
                        try {
                            if (newdata.length > olddata.length) {
                                //Added Series
                                _.forEach(newdata, function (o, i) {
                                    var index = _.findIndex(olddata, ['id', o.id]);
                                    if (index == -1) {
                                        chart.xAxis[0].addPlotLine(o);
                                    }
                                })
                            } else if (newdata.length < olddata.length) {
                                //Removed Series
                                _.forEach(olddata, function (o, i) {
                                    var index = _.findIndex(newdata, ['id', o.id]);
                                    if (index == -1) {
                                        console.log(o);
                                        chart.xAxis[0].removePlotLine(o.id);
                                    }
                                })
                            }
                            //chart.reflow();
                        } catch (e) { }
                    }
                )

                //yAxis Watcher
                scope.$watch(
                    //Value Listener
                    function () { return scope.graphData.yAxis.plotBands; },
                    //Change Listener
                    function (newdata, olddata) {
                        try {
                            if (newdata.length > olddata.length) {
                                //Added Series
                                _.forEach(newdata, function (o, i) {
                                    var index = _.findIndex(olddata, ['id', o.id]);
                                    if (index == -1) {
                                        chart.yAxis[0].addPlotBand(o);
                                    }
                                })
                            } else if (newdata.length < olddata.length) {
                                //Removed Series
                                _.forEach(olddata, function (o, i) {
                                    var index = _.findIndex(newdata, ['id', o.id]);
                                    if (index == -1) {
                                        chart.yAxis[0].removePlotBand(o.id);
                                    }
                                })
                            }
                            //chart.reflow();
                        } catch (e) { }
                    }
                )
                scope.$watch(
                    //Value Listener
                    function () { return scope.graphData.yAxis.plotLines; },
                    //Change Listener
                    function (newdata, olddata) {
                        try {
                            if (newdata.length > olddata.length) {
                                //Added Series
                                _.forEach(newdata, function (o, i) {
                                    var index = _.findIndex(olddata, ['id', o.id]);
                                    if (index == -1) {
                                        chart.yAxis[0].addPlotLine(o);
                                    }
                                })
                            } else if (newdata.length < olddata.length) {
                                //Removed Series
                                _.forEach(olddata, function (o, i) {
                                    var index = _.findIndex(newdata, ['id', o.id]);
                                    if (index == -1) {
                                        chart.yAxis[0].removePlotLine(o.id);
                                    }
                                })
                            }
                            //chart.reflow();
                        } catch (e) { }
                    }
                )
            } catch (e) { }

            /* KYLE'S CODE START */
            // Color Axis Watcher
            try {
                if ("colorAxis" in scope.graphData) {
                    scope.$watch(
                        function () { return scope.graphData.colorAxis },
                        function (newdata, olddata) {
                            try {
                                chart = new Highcharts.Chart(scope.graphData);
                            } catch (e) { }
                        },
                        true
                    );
                }
                if ("type" in scope.graphData.chart && scope.graphData.chart.type == "heatmap") {

                }
                if ("categories" in scope.graphData.yAxis) {
                    scope.$watch(
                        function () { return scope.graphData.yAxis },
                        function (newdata, olddata) {
                            try {
                                chart = new Highcharts.Chart(scope.graphData);
                            } catch (e) { }
                        },
                        true
                    );
                }
            } catch (e) { }
            /* KYLE'S CODE END */

        }
    }
});
hudDirectives.directive('gradientColorPicker', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            controlPoints: '=controlPoints',
        },
        template: '<div gradient-color-picker></div>',
        link: function (scope, element, attrs) {
            scope.controlPoints =
            (scope.controlPoints !== undefined && scope.controlPoints.length) ?
                scope.controlPoints :
                [{
                    color: "#ffffff",
                    position: 0
                },
                {
                    color: "#01a892",
                    position: 1
                }];

            var initialValues = [];
            angular.forEach(scope.controlPoints, function (value, key) {
                initialValues.push(scope.controlPoints[key].color + " " + scope.controlPoints[key].position * 100 + "%");
            });

            element.gradientPicker({
                change: function (points, style) {
                    scope.controlPoints = points;
                    // scope.$apply();
                },
                controlPoints: initialValues
            });
        },
    };
});