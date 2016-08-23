/* Line Family MODULE */
app.controller('SaveDashboardController', function ($scope, $mdDialog, theme, svg, toms, DataFactory, widgetArray) {
    //Variables
    $scope.SVG = svg;// .SVG;               //getting svg items from config
    $scope.modalTitle = "Saving Dashboard";                 //determines Create or Update
    $scope.modalSubtitle = "";              //subtitle depending on which step
    $scope.formLoad = false;                //Load State

    $scope.widgetArray = widgetArray;
    $scope.dashboardTheme = theme;

    $scope.objToSave = {
        dashboardName: "",
        widgets: [],
        dashboardThemes: JSON.stringify(theme),
        isPublic: 0
    }

    $scope.CloseModal = function () {
        $mdDialog.hide();
    }
    $scope.SaveDashboard = function () {
        $scope.objToSave.widgets = [];
        angular.forEach(widgetArray, function (o) {
            $scope.objToSave.widgets.push(JSON.stringify(o));
        })
        console.log($scope.objToSave);
        DataFactory.SaveDashboard($scope.objToSave).then(function (o) {
            console.log("success");

        }, function (o) { console.log("failed"); });
    };
});