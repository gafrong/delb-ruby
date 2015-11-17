'use strict';

angular.module('App')
.controller('MystoreCtrl',['$scope', '$rootScope', '$timeout', 'Item', function ($scope, $rootScope, $timeout, Item) {
  console.log($rootScope.user.name);
  $scope.user = $rootScope.user;
  if($rootScope.user.name){
    $scope.name = $rootScope.user.name;
    $scope.email = $rootScope.user.email;
  } else {
    $scope.name = "Your Store";
  };

  $scope.getLists = function(){
    Item.getItems()
    .success(function (returnData){
      console.log(returnData);
      $scope.items = returnData;
    }).error(function (){
      $scope.errorMsg = "there is no data"
    });
  }

  $scope.getLists();
}]);
