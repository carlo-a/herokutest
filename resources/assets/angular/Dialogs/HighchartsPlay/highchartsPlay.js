/* Line Family MODULE */
app.controller('HighchartsPlayController', function ($scope, $mdDialog, callstate, DataFactory, $filter, svg) {
    //Variables
    $scope.SVG = svg;// .SVG;               //getting svg items from config
    $scope.callstate = callstate;           //create state or update state of modal
    $scope.modalTitle = "";                 //determines Create or Update
    $scope.formLoad = false;                //Load State

    $scope.playText = "";
    $scope.genchart = {};
    $scope.Generate = function () {
        $scope.genchart = JSON.parse($scope.playText);
    }
})
