var app = angular.module("CartoonNetwork");


app.service("CartoonService", [function(){
    this.cartoonList = [];
    
    this.addToonToList = function(cartoon){
        this.cartoonList.push(cartoon);
        return this.cartoonList;
        
    }
    
}]);