'use strict';


angular.module('App')
  .controller('ItemListCtrl', ['$scope', 'Items',
    function ($scope, Items){

      $scope.query = function (){
        $scope.items = Items.query();
        $scope.orderProp = 'age';
      };

      $scope.query();

  }])
  .controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item',
    function ($scope, $routeParams, Item){
      
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
  // add new item
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

      $scope.uploadMenu = [
        {name: 'Product Name', model: 'title', placeholder: 'title', tag: 'itemTitle'}, 
        {name: 'Price', model: 'price', placeholder: 'price', tag: 'itemPrice'}, 
        {name: 'Description', model: 'description', placeholder: 'description', tag: 'itemDescription'}, 
        {name: 'Category', model: 'category', placeholder: 'category', tag: 'itemCategory'}, 
        {name: 'Sale', model: 'sale', placeholder: 'sale', tag: 'itemSale'},
        {name: 'Gender', model: 'gender', placeholder: 'gender', tag: 'itemGender'}, 
        {name: 'Color', model: 'color', placeholder: 'color', tag: 'itemColor'}, 
        {name: 'Size', model: 'size', placeholder: 'size', tag: 'itemSize'}, 
        {name: 'Active', model: 'active', placeholder: 'active', tag: 'itemActive'}, 
        {name: 'Availability', model: 'availability', placeholder: 'availability', tag: 'itemAvailability'}, 
        {name: 'Brand', model: 'brand', placeholder: 'brand', tag: 'itemBrand'}, 
        {name: 'Keywords', model: 'keywords', placeholder: 'keywords', tag: 'itemKeywords'}, 
        {name: 'Quantity', model: 'quantity', placeholder: 'quantity', tag: 'itemQuantity'}
      ];

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
