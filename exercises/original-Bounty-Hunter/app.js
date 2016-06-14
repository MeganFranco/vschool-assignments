var app = angular.module("BountyHunterApp", [])

app.service("BountyService", ["$http", function ($http) {
    var self = this
        //this refers to the function that's running it, and so the current 'this' is relative to the service in general...
    this.bounties = []

    this.getBounties = function () {
        return $http.get("http://localhost:8000/bounties/")
            .then(function (response) {
                self.bounties = response.data;
                //this.bounties would be relative to one of the child functions of the service, messing everything up... so when you use self, you get a reference to the outer 'this' and can alter the properties of the service itself
                //                console.log(self.bounties)
            })

    };

//    this.getBounties();

    this.makeBounty = function (bounty) {
        console.log("service got info from controller")
        return $http.post("http://localhost:8000/bounties/", bounty)
            .then(function (response) {
                self.bounties = response.data;
                //or if only receiving the obj, self.bounties.push(response.data)
            })
    };

    this.editBounty = function (bounty) {
        return $http.post("http://localhost:8000/bounties/" + bounty.id, bounty)
    };

    this.deleteBounty = function (bounty) {
//        console.log("service!")
                console.log(bounty)
        return $http.delete("http://localhost:8000/bounties/" + bounty.id)
    }

}]);

app.controller("MainController", ["$scope", "BountyService", function ($scope, BountyService) {

    $scope.bountyService = BountyService;
    //in view call bountyService.bounties

    $scope.addToBounty = function (bounty) {
        console.log("controller sent info to service")
        BountyService.makeBounty(bounty);

        //        $scope.bountyService = BountyService;
        //        BountyService.getBounties();
        //        console.log("here is where we list things!")
        $scope.bounty = {};
        $scope.getList();

    };

    $scope.getList = function () {
        BountyService.getBounties();
        console.log("got list from controller!")

    };

    $scope.deleteTarget = function (bounty) {
        console.log("scope!")
        BountyService.deleteBounty(bounty)
            .then(function (response) {
                BountyService.getBounties();
            })
            //        $scope.getList();
            //        $scope.bountyService = BountyService;

    };

}]);