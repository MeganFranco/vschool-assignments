var app = angular.module("RockTheVote", [])

app.service("RockVoteService", ["$http", function ($http) {
    var self = this;
    this.posts = []

    this.getPosts = function () {
        return $http.get("http://localhost:8000/posts/")
            .then(function (response) {
                self.posts = response.data;
            })

    };

    this.getPosts();

    this.makePosts = function (posts) {
        return $http.post("http://localhost:8000/posts/", posts)
            .then(function (response) {
                self.posts = response.data;
                //or if only receiving the obj, self.posts.push(response.data)
            })
    };

    this.editPosts = function (posts) {
        return $http.post("http://localhost:8000/posts/" + posts.id, posts)
    };

    this.deletePosts = function (posts) {
        //        console.log(posts)
        return $http.delete("http://localhost:8000/posts/" + posts.id, posts)
    }



}]);

app.controller("MainController", ["$scope", "RockVoteService", function ($scope, RockVoteService) {
    
    $scope.rockVoteService = RockVoteService;
    
    $scope.getPosts = function(){
        RockVoteService.getPosts();
    }
    
//    $scope.getPosts
    
    $scope.addComment = function(post){
//        post.comments.push($scope.comment)
        console.log($scope.comment)
        console.log(post)
        
    }
    
    

}])