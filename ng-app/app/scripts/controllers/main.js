'use strict';

angular.module('App')
  .controller('MainCtrl', ['$scope', 'ModalService', 'ListService', '$rootScope', function ($scope, ModalService, ListService, $rootScope) {

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

    $rootScope.global = {
      search: ''
    };

    $scope.categories = [
      {title: "Item", icon:"glyphicon-th-large", id: 1, link:'#/items'},
      {title: "Top Seller", icon:"glyphicon-thumbs-up", id: 2, linke: '#/topseller'},
      {title: "Sale", icon:"glyphicon-tag", id: 3, link: '#/sale'},
      {title: "New", icon:"glyphicon-star", id: 4, link: '#/new'},
      {title: "Used", icon:"glyphicon-cog", id: 5, link: '#/used'},
      {title: "Other", icon:"glyphicon-cog", id: 6, link: '#/other'}
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
      {title: 'Fitbit Charge Wristband Wireless Activity Fitness Black, Large Small', price: 89.99, description: 'New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable). Packaging should be the same as what is found in a retail store, unless the item is handmade or was packaged by the manufacturer in non-retail packaging, such as an unprinted box or plastic bag.', image: 'http://i.ebayimg.com/images/g/9YAAAOSwbdpWWJLR/s-l500.jpg', subCategory: 'featured', id: 123},
      {title: 'Sansaire Sous Vide Immersion Circulator Black', price: 134.99, description: 'Turn any pot or container into a sous-vide water bath with this groundbreaking immersion circulator. The product of a successful Kickstarter campaign, the Sansaire blew away its funding goal in 13 hours. An ingenious gadget that will change the way you approach cooking, the Sansaire packs professional-grade performance and quality into a wallet-friendly package. To experience this cooking breakthrough, simply clip the Sansaire to the side of any pot, set your cooking temperature with the intuitive controls and let it do the work of cooking your meal. The LED screen displays the temperature setting in bright, easy-to-read numbers, while the innovative thermometer and microprocessor system holds the water to within 0.1°C of the desired temperature. Sansaire offers incredible control and precision across a wide range of dishes, including soft-boiled eggs, meltingly tender steaks, perfect chicken breasts, moist, flavorful salmon fillets and more. An essential tool for the modern kitchen.', image: 'http://i.ebayimg.com/00/s/ODAwWDEyMDA=/z/zuEAAOSw9mFWHN2R/$_58.JPG', subCategory: 'featured', id: 789},
      {title: 'Product 2 jsakdfjskfjks jskdajlsdfj ajdfasd ', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'sale', id:678},
      {title: 'Swagway X1 Self balancing 2 wheels Smart hover-board electric scooter skateboard', price: 399.99, description: 'New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable). Packaging should be the same as what is found in a retail store, unless the item is handmade or was packaged by the manufacturer in non-retail packaging, such as an unprinted box or plastic bag.', image: 'http://i.ebayimg.com/images/g/43IAAOSwDNdV35hJ/s-l1600.jpg', subCategory: 'new', id:456, id:67},
      {title: 'product 2', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'new'},
      {title: 'product 5', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg', subCategory: 'new', id:345},
      {title: 'product 6', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Oh_Hai129.jpg', subCategory: 'new', id:7897},
      {title: 'product 8', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'featured', id:96},
      {title: 'product 8', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png', subCategory: 'featured', id:8758},
      {title: 'product 8', price: 23.22, description: 'sdjfkla sjdkfaljskdf', image: 'http://www.funnycatpix.com/_pics/Oh_Hai129.jpg', subCategory: 'featured', id:97}
    ]
  }]);
