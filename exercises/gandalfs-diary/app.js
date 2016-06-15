var app = angular.module("GandalfsDiary", [])

app.service("DiaryService", ["$http", function ($http) {

}]);

app.controller("MainController", ["$scope", "DiaryService", function ($scope, DiaryService) {
    $scope.diaryService = DiaryService;
    
    $scope.addEntry = function(){
        
    }
}])