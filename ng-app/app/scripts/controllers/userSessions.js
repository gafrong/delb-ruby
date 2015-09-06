'use strict';

/**
* @ngdoc function
* @name ngRailsTemplateApp.controller:UserSessionsCtrl
* @description
* # UserSessionsCtrl
* Controller of the ngRailsTemplateApp
*/
angular.module('App')
  .controller('UserSessionsCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
    // $scope.loginForm = {
    //   email: '',
    //   password: ''
    // };

    // $scope.submitLogin = function (loginForm) {
    //   AuthService.login(loginForm).then(function (user){
    //     $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
    //     $scope.setCurrentUser(user);
    //   }, function () {
    //     $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    //   })
    // }

    $scope.$on('auth:login-error', function (ev, reason) {
      // $scope.error = reason.errors[0];
      $scope.error = "something wrong";

    });

    // $scope.$on('event:auth-loginConfirmed', function(event, data){
    //   $rootScope.isLoggedin = true;
    //   console.log(data);
    // })
  }]);