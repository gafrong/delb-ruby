'use strict';

angular.module('App')
.controller('MystoreCtrl',['$scope', '$rootScope', '$timeout', 'Item', '$http', function ($scope, $rootScope, $timeout, Item, $http) {

  if ($rootScope.user.name === null){
    $scope.user = $rootScope.user.email
  } else if ($rootScope.user.name !== null) {
    $scope.user = $rootScope.user.name; 
  } else {
    $scope.name = 'Your Store';
  };

  $scope.getLists = function(){
    $scope.loading = true;
    Item.getItems()
    .success(function (returnData){
      var myItems = [];
      for (var i = 0; i < returnData.length; i++){
        if (returnData[i].user_id == $rootScope.user.id) {
          myItems.push(returnData[i]);
        }
      }
      $scope.items = myItems;
    }).error(function (){
      $scope.errorMsg = 'Sorry. You haven\'t added any products to sell.';
    }).finally(function(){
      $scope.loading = false;
    });
  }

  $scope.deleteItem = function(id){
    $http.delete('/api/v1/item/' + id)
    .success(function (){
      console.log('deleted');
    }).error(function(){
      console.log('could not delete');
    })

    $scope.getLists();
  }

  $scope.random = function(list) {
    return 0.5 - Math.random();
  }

  $scope.getLists();
}]);
