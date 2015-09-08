'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('App')
  .controller('MainCtrl', ['$scope', 'ModalService', '$auth', function ($scope, ModalService, $auth) {
    $scope.rotateBar = true;
    $scope.loggedIn = false;
    $scope.logo = "images/delb.png";
    $scope.isCollapsed = true;

    $scope.showLogin = function(){
      ModalService.showModal({
        templateUrl: "login.html",
        controller: "UserSessionsCtrl"
      }).then(function(modal){
        modal.element.modal();
        modal.close.then(function(result){
          console.log('!!!');
        });
      })
    };

    $scope.showSignUp = function(){
      ModalService.showModal({
        templateUrl: "signup.html",
        controller: "UserRegistrationsCtrl"
      }).then(function(modal){
        modal.element.modal();
        modal.close.then(function(result){
          console.log('registration modal');
        });
      })
    };

    $scope.subItems =[ 
      { title: "dog", detail: "renee is a dog" },
      { title: "cat", detail: "joe is a cat" },
      { title: "bird", detail: "mike is a bird"}
      ]
  }]);
