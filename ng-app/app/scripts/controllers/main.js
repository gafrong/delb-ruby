'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('App')
  .controller('MainCtrl', ['$scope', 'ModalService', function ($scope, ModalService) {
    $scope.rotateBar = true;
    $scope.loggedIn = false;
    $scope.logo = "images/delb.png";
    $scope.isCollapsed = true;
    $scope.rotateUser = true;
    $scope.rotateUserBar = true;

    $scope.category = [
      {title: "Home & Living"},
      {title: "Arts & Craft"},
      {title: "Fashion"},
      {title: "Sports"},
      {title: "Tech"},
      {title: "Kids"},
      {title: "Other"}
    ];

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
      });
    };

    $scope.subItems =[ 
      { title: 'Design', detail: 'innovation' },
      { title: 'Entertainment', detail: 'pleasure' },
      { title: 'Living', detail: 'happiness'},
      { title: 'Balance', detail: 'peace'}
    ];

    $('#offcanvasRight').on('hide.bs.offcanvas', function(){
        $scope.rotateUserBar = true;
        $scope.rotateUser = true;
        $scope.$apply();
        console.log('!!!');
    });

  }]);
