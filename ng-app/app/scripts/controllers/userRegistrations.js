'use strict';

/**
* @ngdoc function
* @name ngRailsTemplateApp.controller:UserSessionsCtrl
* @description
* # UserSessionsCtrl
* Controller of the ngRailsTemplateApp
*/
angular.module('App')
  .controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.$on('auth:registration-email-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
    };
  }]);