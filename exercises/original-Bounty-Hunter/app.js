var app = angular.module("BountyHunterApp", [])

app.service("BountyService", ["$http", function($http){
    this.getBounties = function(){
        return $http.get("http://localhost:8000/bounty/")
    }
    
    this.makeBounty = function(){
        return $http.post("http://localhost:8000/bounty/", )
    };
                          
    this.editBouty                       
                          
}]);
        
app.controller("MainController", )        