var app = angular.module("RejectionApp")

app.service("TrackerService" ["$http", "UserService", function ($http, UserService) {
    var self = this;
    var baseUrl = "http://localhost:5000/api/";
    var failures = []

    // Gets all the failure objects for a given user. Get by username
    this.getFails = function (fail) {
//        fail.user = UserService.currentUser._id
        return $http.get(baseUrl + '/failure')
            .then(function (response) {
//                return response.data
                self.failures = response.data
            })
    };

////Adds failures to DB/////
    this.addFails = function (fail) {
        fail.user = UserService.currentUser._id
        return $http.post(baseUrl + 'failure', fail).then(function(response){
            return response.data;
        })
    };
    
////Deletes failures from DB//// 
    this.deleteFail = function (fail){
        return $http.post(baseURl + )
    }
    
}]);