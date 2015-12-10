'use strict';

angular.module('App')
.controller('CarouselCtrl',['$scope', function ($scope) {
  $scope.myInterval = 9000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [
    {image: "images/delb-img1.png"},
    {image: "images/delb-img2.png"},
    {image: "images/delb-img3.png"}
  ];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<0; i++) {
    $scope.addSlide();
  }
}]);