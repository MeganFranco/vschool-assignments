var app = angular.module("RejectionApp")

app.controller("TrackController", ["$scope", "TrackService", function ($scope, TrackService) {
    $scope.getFails();

    // Creates failure array if it does not exist. 
    // Updates failure array
    $scope.getFails = function () {
        if (!$scope.failures) {
            $scope.failures = []
        };

        $scope.failures = TrackerService.getFails();
    };

    ////////Add//////////
    $scope.addFail = TrackService.addFails(fail)
        .then(function (data) {
            console.log(data);
            $scope.failures.push(data);
        });



    //    ////////Get////////
    //    $scope.getFails = function () {
    //        TrackService.getFails();
    //    }


    ////////Delete//////////
    $scope.deleteFail = function (failId) {
        TrackService.deleteFail(failId);
    }

}]);