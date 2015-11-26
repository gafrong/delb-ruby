'use strict';

angular.module('App')
.controller('MystoreCtrl',['$scope', '$rootScope', '$timeout', 'Item', function ($scope, $rootScope, $timeout, Item) {
  console.log($rootScope.user.name);
  $scope.user = $rootScope.user;
  if($rootScope.user.name){
    $scope.name = $rootScope.user.name;
    $scope.email = $rootScope.user.email;
  } else {
    $scope.name = 'Your Store';
  };

  $scope.getLists = function(){
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
    });
  }

  $scope.getLists();
}]);
