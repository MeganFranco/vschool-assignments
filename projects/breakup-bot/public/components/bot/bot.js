var app = angular.module("BreakupbotApp");

app.controller("BotPageController", ["$scope", "ResponseService", function($scope, ResponseService){
//    $scope.response = "response"
//    $scope.responseService = ResponseService;
        $scope.message = ResponseService.response;
            
    $scope.respondToInput = function(input){
        ResponseService.getResponse(input).then(function(response){
            $scope.message = response;
            $scope.input = '';
        })
    }
     
}]);

app.service("ResponseService", ["$http", function($http){
    var self = this;
    var baseUrl = "http://localhost:8000";
    this.response = "Hey, I'm not going to be available for the forseeable future, so I think we should stop seeing each other."
    
    this.getResponse = function(input){
        console.log
        return $http.post(baseUrl + "/api/responses/", {input: input})
            .then(function(response){
            console.log(response.data);
           return response.data
        })
    }
    
    this.getData = function(){
        return $http.get(baseUrl)
            .then(function(response){
            return response.data
        })
    }
    
}]);











/*      https://www.npmjs.com/search?q=intelligence
        https://www.npmjs.com/package/rivescript
*/

