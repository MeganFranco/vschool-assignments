var app = angular.module("RejectionApp");

app.controller("ZenController", ['$scope', function ($scope) {
    $scope.options = {
        playlist: ['./assets/sounds.mp3'],
        loop: false, 
        start: true
    };
    
//    var sound = new Audio('../../assets/sounds.mp3');
//    if (sound) {
//        console.log('sound true', sound);
//    }
//    sound.play();

    $('.carousel').carousel({
        interval: 5000
    })

}]);