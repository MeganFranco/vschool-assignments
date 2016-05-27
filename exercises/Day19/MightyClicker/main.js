var app = angular.module("MightyClicker", [])
    ////RED////
app.service("RedService", [function(){
    this.currentCount = 100;
    
    this.decreaseRedCount = function(){
        this.currentCount --;
    }
    
    this.increaseRedCount = function(){
        this.currentCount ++;
    }
    
    
}])

    ////BLUE////
app.service("BlueService", [function(){
    this.currentCount = 100
    
     this.decreaseBlueCount = function(){
        this.currentCount --;
    }
    
    this.increaseBlueCount = function(){
        this.currentCount ++;
    }
    
}])
////////////////////CONTROLLER/////////////////////////////
app.controller("MainController",["$scope", "RedService", "BlueService", function($scope, RedService, BlueService){
    $scope.redCount;
    $scope.blueCount;
    
    $scope.displayCount = function(){
        $scope.redCount = RedService.currentCount;
        $scope.blueCount = BlueService.currentCount;
    
   
    };
    
    //display count once the controller loads//
    $scope.displayCount();
    
    /////////////Red click function//////////////
    $scope.redClick = function(){
        RedService.increaseRedCount();
        BlueService.decreaseBlueCount();
        
        $scope.displayCount();
    }
    
     $scope.blueClick = function(){
        RedService.decreaseRedCount();
        BlueService.increaseBlueCount();
        
        $scope.displayCount();
    }
    
}])























