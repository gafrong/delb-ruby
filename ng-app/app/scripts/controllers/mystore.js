'use strict';

angular.module('App')
  .controller('MystoreCtrl', function ($scope, $rootScope) {
    console.log($rootScope.user.name);
    $scope.user = $rootScope.user;
    if($rootScope.user.name){
      $scope.name = $rootScope.user.name;
      $scope.email = $rootScope.user.email;
    } else {
      $scope.name = "Your Store";
    }
  });
