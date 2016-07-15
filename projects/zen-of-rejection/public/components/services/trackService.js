var app = angular.module("RejectionApp")

app.service("TrackerService" ["$http", "UserService", function ($http, UserService) {
    var self = this;
    var baseUrl = "http://localhost:5000/api/";

    // Gets all the failure objects for a given user. Get by username
    this.getFails = function (fail) {
//        fail.user = UserService.currentUser._id
        return $http.get(baseUrl + '/failure')
            .then(function (response) {
                return response.data
            })
    };

    this.addFails = function (fail) {
        fail.user = UserService.currentUser._id
        return $http.post(baseUrl + 'failure', fail).then(function(response){
            return response.data;
        })
    };
    
}]);