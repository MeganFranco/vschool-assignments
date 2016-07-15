var app = angular.module("RejectionApp")

app.controller("TrackController", ["$scope", "TrackService", function($scope, TrackService){
    $scope.fails = TrackerService.fails;
    
    ////////Add//////////
    $scope.addFail = function(fail) {
        TrackService.addFails(fail);
    }
    
    
    ////////Get////////
    $scope.getFails = function(){
        TrackService.getFails();
    }
    
    
    ////////Delete//////////
    $scope.deleteFail = function(fail){
        TrackService.deleteFail(fail);
    }
    
}]);