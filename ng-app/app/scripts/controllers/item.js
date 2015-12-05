'use strict';

angular.module('App')
  .controller('ItemListCtrl', ['$scope', 'Items', '$q',
    function ($scope, Items, $q){
      
      $scope.query = function (){
        var defer = $q.defer();
        $scope.items = Items.query()
        .success(function(returnData) {
          deferred.resolve(returnData);
        }).error(function(returnData){
          deferred.reject(returnData);
        });
        return deferred.promise;
        
        $scope.orderProp = 'age';
      };

      $scope.query();

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
        console.log(item);
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
  .controller('ItemAddCtrl', ['$scope', '$location', 'Item','$rootScope', 'Upload', 
    function ($scope, $location, Item, $rootScope, Upload){

      $scope.submit = function() {
        $scope.upload($scope.image);  
        $scope.item ='';  
        $location.path('/mystore')    
      };

      $scope.upload = function(image) {
        $scope.item.user_id = $rootScope.user.id;
        Upload.upload({
          url: '/api/v1/item',
          data: {
            image: image, 
            active: $scope.item.active,
            availability: $scope.item.availability,
            brand: $scope.item.brand,
            category_id: $scope.item.category_id,
            color: $scope.item.color,
            description: $scope.item.description,
            gender: $scope.item.gender,
            id: $scope.item.id,
            keywords: $scope.item.keywords,
            merchant_id: $scope.item.merchant_id,
            merchant_url: $scope.item.merchant_url,
            price: $scope.item.price,
            quantity: $scope.item.quantity,
            saletype: $scope.item.saletype,
            sku: $scope.item.sku,
            title: $scope.item.title, 
            user_id: $scope.item.user_id
          }
        }).success(function(){
          console.log('success');
        }).error(function(){
          console.log('error');
        });
      };


    // $scope.saveItem = function (){

    //   $scope.item.user_id = $rootScope.user.id;
    //   $scope.item.image_url50 = $scope.image.base64;
    //   Item.postItem($scope.item.user_id, $scope.item.title, $scope.item.image_url50, $scope.item.description, $scope.item.price)
    //   .success(function(){
    //     console.log('successful');
    //   }).error(function(){
    //     console.log('wrong!!');
    //   });
 
    //   $scope.item ='';  
    //   $location.path('/mystore')
    // };

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
