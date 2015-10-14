'use strict';

angular.module('App')
  .controller('ProductCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }]);
