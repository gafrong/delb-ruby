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

    $scope.categories = [
      {title: "Featured", icon:"glyphicon-th-large"},
      {title: "Top Sellers", icon:"glyphicon-thumbs-up"},
      {title: "Sale", icon:"glyphicon-tag"},
      {title: "New", icon:"glyphicon-star"},
      {title: "Tech", icon:"glyphicon-star"},
      {title: "Other", icon:"glyphicon-cog"}
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
      {title: 'product 1', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png'},
      {title: 'product 1', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png'},
      {title: 'product 1', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png'},
      {title: 'product 1', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png'},
      {title: 'product 1', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png'}
    ]
  }]);
