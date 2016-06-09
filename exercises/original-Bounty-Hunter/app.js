var app = angular.module("BountyHunterApp", [])

app.service("BountyService", ["$http", function ($http) {
    var self = this
        //this refers to the function that's running it, and so the current 'this' is relative to the service in general...
    this.bounties = []

    this.getBounties = function () {
        return $http.get("http://localhost:8000/bounty/")
            .then(function (response) {
                self.bounties = response.data;
                //this.bounties would be relative to one of the child functions of the service, messing everything up... so when you use self, you get a reference to the outer 'this' and can alter the properties of the service itself
                //                console.log(self.bounties)
            })

    };

    this.getBounties();

    this.makeBounty = function (bounty) {
        return $http.post("http://localhost:8000/bounty/", bounty)
            .then(function (response) {
                self.bounties = response.data;
                //or if only receiving the obj, self.bounties.push(response.data)
            })
    };

    this.editBounty = function (bounty) {
        return $http.post("http://localhost:8000/bounty/" + bounty.id, bounty)
    };

    this.deleteBounty = function (bounty) {
        //        console.log(bounty)
        return $http.delete("http://localhost:8000/bounty/" + bounty.id)
    }

}]);

app.controller("MainController", ["$scope", "BountyService", function ($scope, BountyService) {

    $scope.bountyService = BountyService;
    //in view call bountyService.bounties

    $scope.addToBounty = function (bounty) {
        BountyService.makeBounty(bounty);
        //        $scope.getList();
        //        $scope.bountyService = BountyService;
        //        BountyService.getBounties();
        $scope.bounty = {};

    }

    $scope.getList = function () {
        BountyService.getBounties();

    }

    $scope.deleteTarget = function (bounty) {
        BountyService.deleteBounty(bounty)
            .then(function (response) {
                BountyService.getBounties();
            })
            //        $scope.getList();
            //        $scope.bountyService = BountyService;

    }

}]);