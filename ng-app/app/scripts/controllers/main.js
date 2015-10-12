'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('App')
  .controller('MainCtrl', ['$scope', 'ModalService', 'ListService', function ($scope, ModalService, ListService) {

    $scope.rotateBar = true;
    $scope.loggedIn = false;
    $scope.logo = "images/delb.png";
    $scope.isCollapsed = true;
    $scope.rotateUser = true;
    $scope.rotateUserBar = true;
    $scope.currentTabIndex = 0;
    $scope.lists = [];
    $scope.selected = 0;  
    $scope.filters = { }; 


    $scope.categories = [
      {title: "Featured", icon:"glyphicon-th-large"},
      {title: "Top Seller", icon:"glyphicon-thumbs-up"},
      {title: "Sale", icon:"glyphicon-tag"},
      {title: "New", icon:"glyphicon-star"},
      {title: "Used", icon:"glyphicon-cog"},
      {title: "Other", icon:"glyphicon-cog"}
    ];

    $scope.menuTabs = [
      {title: 'menu1'},
      {title: 'menu1'},
      {title: 'menu1'},
      {title: 'menu1'},
      {title: 'menu1'},
      {title: 'menu1'},
      {title: 'menu1'},
      {title: 'menu1'}
    ];

    $scope.showLogin = function(){
      ModalService.showModal({
        templateUrl: "login.html",
        controller: "UserSessionsCtrl"
      }).then(function(modal){
        modal.element.modal();
        modal.close.then(function(result){
          console.log('!!!');
        });
      })
    };

    $scope.showSignUp = function(){
      ModalService.showModal({
        templateUrl: "signup.html",
        controller: "UserRegistrationsCtrl"
      }).then(function(modal){
        modal.element.modal();
        modal.close.then(function(result){
          console.log('registration modal');
        });
      });
    };

    $scope.subItems =[ 
      { title: 'Design', detail: 'innovation' },
      { title: 'Entertainment', detail: 'pleasure' },
      { title: 'Living', detail: 'happiness'},
      { title: 'Balance', detail: 'peace'}
    ];

    $scope.showTab = function(tabIndex) {
      $scope.currentTabIndex = tabIndex;
      $scope.selected = tabIndex;
    };

    $('#offcanvasRight').on('hide.bs.offcanvas', function(){
        $scope.rotateUserBar = true;
        $scope.rotateUser = true;
        $scope.$apply();
    });

    $('#offcanvasRight > ul > li > a').click(function() {
      $('.navmenu').offcanvas('hide');
    });

    // $scope.getList = function(){
    //   ListService.getListItems()
    //   .success(function (returnData){
    //     console.log(returnData);
    //     $scope.lists = returnData;
    //   }).error(function (){
    //     $scope.errorMsg = "can't get the list"
    //   });
    // }; 

    // $scope.getList();   

    $scope.lists = [
      {title: 'product 1 sjdfkasdfjaksdlfja djfjas dksjadlfkj', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg', subCategory: 'featured'},
      {title: 'Product 1', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg', subCategory: 'top seller'},
      {title: 'Product 2 jsakdfjskfjks jskdajlsdfj ajdfasd ', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'sale'},
      {title: 'product 1', price: 23.22, description: 'sdjfkljsdkal ajskdlfaj ajsdkfal a sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Oh_Hai129.jpg', subCategory: 'new'},
      {title: 'product 2', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'new'},
      {title: 'product 5', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg', subCategory: 'new'},
      {title: 'product 6', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Oh_Hai129.jpg', subCategory: 'new'},
      {title: 'product 8', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'featured'},
      {title: 'product 8', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'featured'},
      {title: 'product 8', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Oh_Hai129.jpg', subCategory: 'featured'}
    ]
  }]);
