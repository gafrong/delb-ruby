'use strict';

/**
* @ngdoc function
* @name ngRailsTemplateApp.controller:UserSessionsCtrl
* @description
* # UserSessionsCtrl
* Controller of the ngRailsTemplateApp
*/
angular.module('App')
  .controller('UserSessionsCtrl', ['$scope', function ($scope) {
    $scope.$on('auth:login-error', function(ev, reason) {
      // $scope.error = reason.errors[0];
      $scope.error = "something wrong";

    });

    // $scope.$on('event:auth-loginConfirmed', function(event, data){
    //   $rootScope.isLoggedin = true;
    //   console.log(data);
    // })
  }]);