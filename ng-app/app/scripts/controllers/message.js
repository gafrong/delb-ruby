'use strict';

angular.module('App')
  .controller('MessageCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($rootScope);
    $scope.user = $rootScope.user;
    $scope.name = $rootScope.user.name;
    $scope.email = $rootScope.user.email;

  });
