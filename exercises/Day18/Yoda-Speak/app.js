var app = angular.module("YodaSpeak", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {


    //////////////////send for translation////////////////////




    $scope.translate = function () {


        var config = {
            headers: {
              "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
            }
        };



        $http.get("https://yoda.p.mashape.com/yoda?sentence=" +
                $scope.userSentence, config)
            .then(function (response) {

                $scope.yodaSentence = response.data;
                console.log(reponse.data)

            })
    }





    //////////////return translation///////////////////////////



}])