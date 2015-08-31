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

    $scope.showLogin = function(){
      ModalService.showModal({
        templateUrl: "modal.html",
        controller: "UserSessionsCtrl"
      }).then(function(modal){
        modal.element.modal();
        modal.close.then(function(result){
          alert('!!!');
        });
      })
    };
  }]);
