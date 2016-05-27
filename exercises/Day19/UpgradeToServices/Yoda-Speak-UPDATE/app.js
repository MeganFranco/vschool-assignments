var app = angular.module("YodaSpeak", []);

app.service("HttpService", ["$http", function ($http) {
    var config = {
        headers: {
            "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
        }
    };
    this.getTranslation = function (userSentence) {

        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" +
            userSentence, config)
    }


}])





app.controller("MainController", ["$scope", "HttpService", function ($scope, HttpService) {


    //////////////////send for translation////////////////////


    $scope.translate = function () {



        $scope.translate = function () {}
        HttpService.getTranslation($scope.userSentence)
            .then(function (response) {

                $scope.yodaSentence = response.data;
                console.log(response.data)

            })
    }





    //////////////return translation///////////////////////////



}])