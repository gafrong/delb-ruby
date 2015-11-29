'use strict';

angular.module('App')
.controller('MystoreCtrl',['$scope', '$rootScope', '$timeout', 'Item', '$http', function ($scope, $rootScope, $timeout, Item, $http) {
  console.log($rootScope.user.name);
  $scope.user = $rootScope.user;
  if($rootScope.user.name){
    $scope.name = $rootScope.user.name;
    $scope.email = $rootScope.user.email;
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

  $scope.getLists();
}]);
