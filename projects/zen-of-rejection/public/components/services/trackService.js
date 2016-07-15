var app = angular.module("RejectionApp");

app.service("TrackerService", ["$http", "UserService", function ($http, UserService) {
    var self = this;
    var baseUrl = "http://localhost:5000/api/";
    //    var failures = [];

    // Gets all the failure objects for a given user. Get by username
    this.getFails = function () {
        //        fail.user = UserService.currentUser._id
        console.log("Service line 11")
        return $http.get(baseUrl + 'failure')
            .then(function (response) {
            console.log('response ',response.data);
                return response.data;
                    //                self.failures = response.data;
            })
    };

    ////Adds failures to DB/////
    this.addFail = function (fail) {
        //        fail.user = UserService.currentUser._id
        return $http.post(baseUrl + 'failure', fail)
            .then(function (response) {
                return response.data;
            })
    };

    ////Deletes failures from DB//// 
    this.deleteFail = function (failID) {
        return $http.post(baseURl + 'failure', failID)
    }

}]);