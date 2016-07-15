var app = angular.module("RejectionApp");

app.controller("TrackController", ["$scope", "TrackerService", function ($scope, TrackerService) {
    // Creates failure array if it does not exist. 
    // Updates failure array
    $scope.getFails = function () {
        if (!$scope.failures) {
            $scope.failures = [];
        };
        console.log("controller 'get fails' function line 10")
        TrackerService.getFails().then(function(failData){
            $scope.failures = failData;
        });
        console.log($scope.failures);
        console.log("get ran");
    };

    $scope.getFails();
    console.log($scope.failures + " controller line 16")

    ////////Add//////////

    $scope.addFailure = function () {
        $scope.fail.date = new Date();
        TrackerService.addFail($scope.fail)
            .then(function (data) {
                console.log(data);
                $scope.failures.push(data);
            })
    };



    //    ////////Get////////
    //    $scope.getFails = function () {
    //        TrackService.getFails();
    //    }


    ////////Delete//////////
    $scope.deleteFail = function (failId) {
        TrackerService.deleteFail(failId);
    };

}]);