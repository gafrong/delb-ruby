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
      {title: 'Swagway X1 Self balancing 2 wheels Smart hover-board electric scooter skateboard', price: 399.99, description: 'New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable). Packaging should be the same as what is found in a retail store, unless the item is handmade or was packaged by the manufacturer in non-retail packaging, such as an unprinted box or plastic bag.', image: 'http://i.ebayimg.com/images/g/43IAAOSwDNdV35hJ/s-l1600.jpg', subCategory: 'new', id:456, id:67},
      {title: 'Stylish Leather card wallets with RFID protection', price: 75, description: 'We crafted a wallet for a friend by keeping his requirements in mind and he was amazed in every aspect either its design or a quality or a purpose.', image: 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1446525073/cokgmkfj5z5ywypho05g.jpg', subCategory: 'featured', id:96},
      {title: 'Gourmet Bagel & Coffee', price: 23.22, description: 'Enjoy a gourmet bagel for breakfast or lunch washed down with a bottle of water or coffee; upgrade to a smoothie in flavours like Berry Good', image: 'https://img.grouponcdn.com/deal/joGN9JG3YE4i7yMUWwvF/gK-960x576/v1/c700x420.jpg', subCategory: 'restaurant', id:678},
      {title: 'Taco: All You Can Eat', price: 9.00, description: 'Feast on all-you-can-eat tacos with a classic margarita each; choose from wagyu brisket, chicken, pulled pork, fish, tofu, and veg options', image: 'https://img.grouponcdn.com/deal/cMgtDMJ2uSemk6Dw7zrw/9P-2048x1229/v1/c700x420.jpg', subCategory: 'Special'},
      {title: 'Peru 7days', price: 1199, description: 'Seven-Day Inca Trail Trek to Machu Picchu Including Meals and Transfers with Valencia Travel Cusco', image: 'https://img.grouponcdn.com/deal/9Uz1Sb4ovkoi2cnZNh7V/Pg-960x576/v1/c700x420.jpg', subCategory: 'Travel', id:345},
      {title: 'Norlan Whiskey Glass', price: 48, description: 'sdjfkla sjdkfaljskdf', image: 'https://ksr-ugc.imgix.net/assets/004/772/694/848cf08a83fce100435d99e39c9ff15e_original.gif?v=1445901679&w=680&fit=max&q=92&s=18850806264b26798f51c1106453d6f8', subCategory: 'featured', id:97},
      {title: 'Tesla Model S', price: 124813, description: 'Tesla\'s advanced electric powertrain delivers exhilarating performance. Unlike a gasoline internal combustion engine with hundreds of moving parts, Tesla electric motors have only one moving piece: the rotor. As a result, Model S acceleration is instantaneous, silent and smooth. Step on the accelerator and in as little as 3.0 seconds Model S is traveling 100 km per hour, without hesitation, and without a drop of gasoline. Model S is an evolution in automobile engineering.', image: 'https://www.teslamotors.com/sites/default/files/images/homepage/home_hero_70.jpg', subCategory: 'Auto', id:7897},
      {title: 'G-RO', price: 199, description: 'The world\'s best carry-on luggage- its patented "all-terrain" wheels change EVERYTHING!', image: 'http://static.highsnobiety.com/wp-content/uploads/2015/10/gro-revolutionary-luggage-04.jpg', subCategory: 'featured', id:8758}
    ]
  }]);
