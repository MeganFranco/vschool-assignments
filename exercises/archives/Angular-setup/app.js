var app = angular.module("learningAngular", []);

//every angular app comes with a method called 'controler' to connect data and view

//you have to give it a name - usually w/ a capital letter

app.controller("MainController", ["$scope", function($scope) {
    //anything you want to do with your page goes inside this controller (i.e. right here)
    
    //$scope is an important function, but will change if minified, but they put an array to wrap the second parameter - if you're adding parameters to the function, you'll also have to add that parameter name as a string into the array. In respective order obviously...
    
    //get it to speak to the page --> add this controller to the body(or choice element) of the HTML
    
//    FIRST WAY scope.name = "Joe Sixpack" ////
//    
//    $scope.person = {
//        name: "Joe Sixpack"
//    }
    
//  REPEAT STUFF  
//    $scope.people [
//        {
//            name: "Lou" , 
//            age: 65,
//            //and nest
//            friends: ["Harold", "James", "Judy"]
//        },
//        {
//            name: "Abigail" , 
//            age: 90,
//            //and nest
//            friends: ["Harold", "James", "Judy"]
//        },
//        {
//            name: "Jim" , 
//            age: 70,
//            //and nest
//            friends: ["Harold", "James", "Judy"]
//        },
//    ]

    
    ////////NG MODEL
    
    
}]);