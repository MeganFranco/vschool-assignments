var app = angular.module("Refresher", []);

app.controller("MainController", ["$scope", function($scope){
    
    
$scope.addNums = function(){
    
    $scope.newSum = $scope.firstNumber + $scope.secondNumber;

} 
}]);


app.controller("MultiplyController", ["$scope", function($scope){
    
    $scope.multiplyNums = function(){
        $scope.newProduct = $scope.firstMultiply * $scope.secondMultiply;
    }
    
    
}])
