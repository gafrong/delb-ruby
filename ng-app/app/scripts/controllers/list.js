'use strict';

angular.module('App')
  .controller('ListCtrl', ['$http', '$scope', 'ListService','$location', 'ShareData', function ($http, $scope, ListService, $location, ShareData) {
  
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

    // dummy data
    $scope.lists = [
      {title: 'product1', price: 1},
      {title: 'product2', price: 2},
      {title: 'product3', price: 3},
      {title: 'product4', price: 4},
      {title: 'product1', price: 5}
    ];
      
    $scope.searchProduct = function(myValue){
      $scope.searchQuery = angular.copy($scope.query);
      $scope.listsToFilter = $scope.lists;
      // $rootScope.listsToFilter = $scope.listsToFilter;
      // $rootScope.searchQuery= $scope.searchQuery;
      $scope.searchResult = true;
      $location.path('/products');
    };

    $scope.dataToShare = [];
    $scope.shareMyData = function(query){
      $scope.dataToShare = query;
      ShareData.addData($scope.dataToShare);

      window.location.href = "#/products";
    };
  }]);

angular.module('App')
  .controller('ListDetailCtrl', function($scope, ShareData, $window, $rootScope){
    // dummy data
    $scope.lists = [
      {title: 'product1', price: 1},
      {title: 'product2', price: 2},
      {title: 'product3', price: 3},
      {title: 'product4', price: 4},
      {title: 'product1', price: 5}
    ];
    console.log($scope.sharedData);
    $scope.sharedData = ShareData.getData();
    console.log($scope.sharedData);
    if($scope.sharedData !== undefined){
      $scope.searchQuery = $scope.sharedData.slice(-1)[0];
    } else {
      $scope.searchQuery = "";
    }
    sessionStorage.clear();
  })

  .service('ShareData', function($window){
    var KEY = 'App.SelectedValue';
    var addData = function(newObj){
      var mydata = $window.sessionStorage.getItem(KEY);
      if (mydata){
        mydata = JSON.parse(mydata);
      } else {
        mydata = [];
      }
      mydata.push(newObj);
      $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
    };

    var getData = function($scope, $rootScope){
      var mydata = $window.sessionStorage.getItem(KEY);
      if (mydata){

        mydata = JSON.parse(mydata);
      }
      return mydata || [];
    };

    return {
      addData: addData,
      getData: getData
    };

  });

