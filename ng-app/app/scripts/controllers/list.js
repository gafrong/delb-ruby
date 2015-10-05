'use strict';

angular.module('App')
  .controller('ListCtrl', ['$http', '$scope', 'ListService', function ($http, $scope, ListService) {
  
      $scope.heading = 'List';
      $scope.lists = [];
      $scope.successMsg = "";
      $scope.errorMsg = ""; 
      $scope.currentTabIndex = 1;
      $scope.selectedCategory = "Select Category";
      
    $scope.getList = function(){
      ListService.getListItems()
      .success(function (returnData){
        $scope.lists = returnData;
      }).error(function (){
        $scope.errorMsg = "can't get the list"
      });
    };

    $scope.selectedCategory;
    $scope.dropdownCategorySelect = function(item){
      $scope.selectedCategory = item;
      $scope.category = item;
    };

    $scope.addList = function(){
      ListService.postListItem($scope.title, $scope.category, $scope.price, $scope.description)
      .success(function (){
        $scope.successMsg = "Uploaded successfully";
      }).error(function (){
        $scope.errorMsg = "oops!";
      });
      $scope.title = "";
      $scope.category = "";
      $scope.price = "";
      $scope.description = "";
      $scope.selectedCategory = "Select a category";
      $scope.getList();
    };

    $scope.deleteList = function(id) {
      $http.delete('/api/v1/list/' + id)
      .success(function (){
        console.log('success');
      }).error(function(){
        console.log('fail');
      })
      $scope.getList();
    }

    $scope.showTab = function(tabIndex) {
      $scope.currentTabIndex = tabIndex;
    };

    $scope.items = [
      'Accessories', 'Arts & Craft', 'Bags', 'Beauty', 'Clothing', 'Craft', 'Electronics', 'Home', 'Jewerly', 'Kids', 'Party', 'Pets', 'Shoes', 'Toys', 'Weddings'
    ];

    $scope.getList();
  }]);

