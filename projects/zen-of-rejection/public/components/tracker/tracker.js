var app = angular.module("RejectionApp");

app.controller("TrackController", ["$scope", "TrackerService", function ($scope, TrackerService) {
    // Creates failure array if it does not exist. 
    // Updates failure array

    $scope.getFails = function () {
        if (!$scope.failures) {
            $scope.failures = [];
        };
        TrackerService.getFails().then(function (failData) {
            $scope.failures = failData;
        });
    };

    $scope.getFails();


    ////////Add//////////

    $scope.addFailure = function () {
        TrackerService.addFail($scope.fail)
            .then(function (data) {
                $scope.failures.push(data);
                $scope.fail = {};
            });

    };



    //    ////////Get////////
    //    $scope.getFails = function () {
    //        TrackService.getFails();
    //    }


    ////////Delete//////////
    $scope.deleteFail = function (failId, index) {
        console.log("clicked!")
        TrackerService.deleteFail(failId);
        console.log(index)
        $scope.failures.splice(index, 1);
    };

}]);