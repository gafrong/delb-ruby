'use strict';

angular.module('App')
  .controller('AboutCtrl', function ($scope) {
    $scope.currentTabIndex = 0;

    $scope.showTab = function(tabIndex) {
      $scope.currentTabIndex = tabIndex;
    };
  })
  .controller('PricingCtrl', function($scope){
    $scope.title = "Pricing";
  })
