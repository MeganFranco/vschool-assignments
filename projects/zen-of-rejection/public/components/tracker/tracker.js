var app = angular.module("RejectionApp");

app.controller("TrackController", ["$scope", "TrackerService", function ($scope, TrackerService) {
    // Creates failure array if it does not exist. 
    // Updates failure array

    $scope.type = null;
    $scope.entry = {};

    $scope.calculateScore = function () {
        //*$scope.failures is your array of objects just hanging out on the scope*//
        var score = 0;
        for (var i = 0; i < $scope.failures.length; i++) {
            if ($scope.failures[i].type === "win") {
                score++
            } else {
                score +=10
            }
        }
        $scope.totalScore = score
    }


    $scope.getFails = function () {
        if (!$scope.failures) {
            $scope.failures = [];
        };
        TrackerService.getFails()
            .then(function (failData) {
                $scope.failures = failData;
                $scope.calculateScore();
            });

    };

    $scope.getFails();


    ////////Add//////////

    $scope.addEntry = function () {
        $scope.entry.type = $scope.type;

        TrackerService.addFail($scope.entry)
            .then(function (data) {
                $scope.failures.push(data);
                $scope.entry = {};
                $scope.type = null;
                $scope.calculateScore();
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