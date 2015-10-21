'use strict';

angular.module('App')
  .controller('ItemListCtrl', ['$scope', 'Items',
    function ($scope, Items){
      $scope.items = Items.query();
      $scope.orderProp = 'age';
  }])
  .controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item',
    function ($scope, $routeParams, Item){
      Item.query({id: $routeParams.id})
      .$promise.then(function(item){
        console.log(item[$routeParams.id].title);
        $scope.item = item[$routeParams.id];
      }); 

      $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
      }; 
  }])
  .controller('ItemAddCtrl', ['$scope', '$resource', '$location', 'Upload', function($scope, $resource, $location, Upload){
    var items = $resource('/api/v1/item/:id', {id:'@id'});
    $scope.saveItem = function (){
      items.save($scope.item);
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
      // $scope.getItems = function(){
      //   Item.getItems()
      //   .success(function (returnData){
      //     $scope.items = returnData;
      //     console.log(returnData);
      //   }).error(function () {
      //     $scope.errorMsg = "can't get items";
      //     console.log('ERR');
      //   });
      // };

      // $scope.getItems();
  //   }])
  // .controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item', function ($scope, $routeParams, Item){
  //     Item.getItem({id:$routeParams.id})
  //     .success(function (returnData){
  //       $scope.item = returnData;
  //       console.log(returnData);
  //     }).error(function(){
  //       console.log('errrr');
  //     })
  //     console.log($scope.items);
  //     $scope.item = $scope.items[$routeParams.id]
      // $scope.item = Item.get({id: $routeParams.id}, function (item){
      //   $scope.mainImageUrl = item.images[0];
      // });
      // console.log($routeParams);
      // console.log($route.current.params.id)
     
      // Item.getItem($route.current.params.id)
      // .success(function (returnData){
      //   console.log(returnData);
      //   $scope.item = returnData;
      // }).error(function (){
      //   $scope.errorMsg = "no item";
      //   console.log('no item error');
      // });
     

      // $scope.getItem();