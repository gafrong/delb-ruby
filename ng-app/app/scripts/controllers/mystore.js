'use strict';

angular.module('App')
  .controller('MystoreCtrl', function ($scope, user) {
    console.log(user);
    $scope.user = user;
    if(user.name){
      $scope.name = user.name;
    } else {
      $scope.name = "Your Store";
    }
  });
