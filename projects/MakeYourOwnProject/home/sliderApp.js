var sliderApp = angular.module('sliderApp', []);

sliderApp.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {},
    templateUrl: 'templates/templateurl.html'
  };
});
sliderApp.controller('SliderController', function($scope) {
  $scope.images = [{
    src: 'img1.png',
    title: 'Pic 1'
  }, {
    src: 'img2.jpg',
    title: 'Pic 2'
  }, {
    src: 'img3.jpg',
    title: 'Pic 3'
  }, {
    src: 'img4.png',
    title: 'Pic 4'
  }, {
    src: 'img5.png',
    title: 'Pic 5'
  }];
});