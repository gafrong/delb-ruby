'use strict';

angular.module('App')
  .controller('ItemListCtrl', ['$scope', 'Items',
    function ($scope, Items){
      $scope.items = Items.query();
      $scope.orderProp = 'age';
  }])
  .controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item',
    function ($scope, $routeParams, Item){
      console.log($routeParams.id);
      $scope.loaderSource = 'images/default.gif';
      $scope.loading = true;
      Item.getItem({id: $routeParams.id})
      .success(function(returnData){
        angular.forEach(returnData, function(item){
          if (item.id == $routeParams.id)
          $scope.item = item;
        });
      }).error(function(){
          $scope.errorMsg = 'Oops, there\'s no item';
      }).finally(function(){
          $scope.loading = false;
      }); 

      $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
      }; 
  }])
  .controller('ItemAddCtrl', ['$scope', '$location', 'Item','$rootScope', 
    function ($scope, $location, Item, $rootScope){
    
    $scope.saveItem = function (){

      $scope.item.user_id = $rootScope.user.id;
      $scope.item.image_url50 = $scope.image.base64;
      Item.postItem($scope.item.user_id, $scope.item.title, $scope.item.image_url50, $scope.item.description, $scope.item.price)
      .success(function(){
        console.log('successful');
      }).error(function(){
        console.log('wrong!!');
      });
 
      $scope.item ='';  
      $location.path('/mystore')
    };

  }])
  .controller('ItemUpdateCtrl', ['$scope', '$resource', 'Item', '$location', '$routeParams', function($scope, $resource, Item, $location, $routeParams){
      $scope.item = User.get({id: $routeParams.id})
      $scope.update = function(){
        if ($scope.itemForm.$valid){
          Item.update($scope.item, function(){
            $location.path('/');
          }, function(error){
            console.log(error);
          });
        }
      };
  }]);
