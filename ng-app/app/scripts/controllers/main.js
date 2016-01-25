'use strict';

angular.module('App')
  .controller('MainCtrl', ['$scope', 'ModalService', 'ListService', '$rootScope', 'ShareData','$http', '$q', function ($scope, ModalService, ListService, $rootScope, ShareData, $http, $q) {

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
    
    if($scope.filterLocation == undefined){
      $scope.filterLocation = "";
    }
    if($scope.filterCategory == undefined){
      $scope.filterCategory = "";
    }
    $scope.selectedDropdownItem = "";
    
    $scope.categoryItems = [
      'all',
      'beverage',
      'bread',
      'cake',
      'cheese',
      'dessert',
      'pie',
      'pasta',
      'sauce',
      'snack'
    ] 

    var categoryInput;

    $scope.itemSelected = function(item){
      categoryInput = item;
      // console.log(categoryInput);
    }

    var newCategoryItems = [];
    $scope.filterDropdown = function(userInput){
      // console.log(userInput);
      if(userInput !== ""){
        categoryInput = userInput;
      }
      var filter = $q.defer();
      var normalisedInput = userInput.toLowerCase();
      var filteredArray = $scope.categoryItems.filter(function(menu){
        return menu.toLowerCase().indexOf(normalisedInput) === 0;
      });
      // console.log(userInput);
      // console.log($scope.inputValue);
      filter.resolve(filteredArray);
      // console.log(filteredArray);
      // console.log(userInput);

      return filter.promise;
    
    }

    // main page search 
    $scope.dataToShare = [];
    $scope.shareMyData = function(filterLocation, filterCategory){
     
      if($scope.selectedDropdownItem !== null){
        // console.log($scope.selectedDropdownItem);
        $scope.dataToShare = [];
        $scope.dataToShare.push(filterLocation, $scope.selectedDropdownItem);        
      } else {
        $scope.dataToShare.push(filterLocation);
        $scope.dataToShare.push(categoryInput);
      }
      // console.log(categoryInput);
      // console.log($scope.dataToShare);
      // console.log($scope.selectedDropdownItem);
      ShareData.addData($scope.dataToShare);
      window.location.href = "#/listtest";
    }

    $rootScope.global = {
      search: ''
    };

    $scope.categories = [
      {title: "Item", icon:"glyphicon-th-large", id: 1, link:'#/items'}
      // ,
      // {title: "Top Seller", icon:"glyphicon-thumbs-up", id: 2, linke: '#/topseller'},
      // {title: "Sale", icon:"glyphicon-tag", id: 3, link: '#/sale'},
      // {title: "New", icon:"glyphicon-star", id: 4, link: '#/new'},
      // {title: "Used", icon:"glyphicon-cog", id: 5, link: '#/used'},
      // {title: "Other", icon:"glyphicon-cog", id: 6, link: '#/other'}
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

    $scope.lists = [
      {title: 'Apple Pie', price: 89.99, description: 'Normally, this would be where we would tell you how incredible this apple pie is. How it is so stuffed with perfectly cooked, incredibly juicy apples, the crust positively bulges. How, being baked in a paper bag makes the top crust uniquely crunchy while keeping the bottom crust amazingly light and flakey, a hallmark of the best old-fashioned crust. How the delicate, golden brown crust and hearty sweet-tart apples combine to make a deliciously perfect pie. But don’t trust us. Trust the Wall Street Journal. Trust Gourmet. Trust the Food Network. They have all awarded the Elegant Farmer’s Apple Pie Baked in a Paper Bag the “best pie in America.” And we couldn’t agree more.', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-applepie.jpg', subCategory: 'featured', id: 1, location: 'melbourne'},
      {title: 'Gourmet Buckeyes', price: 49.99, description: 'If there’s one thing Ohio State and Michigan fans can agree on, it’s that these creamy dark chocolate and peanut butter Buckeyes are handcrafted perfection. Forty of these chocolate peanut butter gems are individually wrapped and presented in Brownie Points’ 20 oz. canister tied with their signature polka dot ribbon.', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-buckeyes.jpg', subCategory: 'featured', id: 2, location: 'sydney'},
      {title: 'Gourmet Sampler', price: 109, description: 'Celebrate with the best of the best when you send this gourmet gift basket! Brownie Points’ brown gift basket is filled with four 3×3 gourmet brownies, three – 3.5oz gourmet popcorn, one caramel pretzel rod, one package of hand dipped pretzel rods, four gourmet buckeyes, one turtle, one schmurtle, one 2pk of chocolate dipped grahams, twelve baby brownies, six chocolate dipped brownie pops and three half dipped cookies.', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-sampler.jpg', subCategory: 'new', id:3, location: 'melbourne'},
      {title: 'Blueberry Pancake Pie', price: 59, description: 'Awesome blueberry pancake baked everyday.', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-blueberry.jpg', subCategory: 'featured', id:4, location: 'perth'},
      {title: 'Gourmet Bagel & Coffee', price: 23.22, description: 'Enjoy a gourmet bagel for breakfast or lunch washed down with a bottle of water or coffee; upgrade to a smoothie in flavours like Berry Good', image: 'https://img.grouponcdn.com/deal/joGN9JG3YE4i7yMUWwvF/gK-960x576/v1/c700x420.jpg', subCategory: 'restaurant', id:5, location: 'brisbane'},
      {title: 'Taco: All You Can Eat', price: 9.00, description: 'Feast on all-you-can-eat tacos with a classic margarita each; choose from wagyu brisket, chicken, pulled pork, fish, tofu, and veg options', image: 'https://img.grouponcdn.com/deal/cMgtDMJ2uSemk6Dw7zrw/9P-2048x1229/v1/c700x420.jpg', subCategory: 'Special', id:6, location: 'perth'},
      {title: 'The Hummingbird Cake', price: 25, description: 'If you aren’t familiar with a Hummingbird cake you will be soon! Each cake is baked to perfection and loaded with raisins, bananas, pecans, and pineapple, making this a very moist and irresistible cake. To top that, every cake is finished by hand with a smooth cream cheese icing that will keep you coming back for seconds, or thirds.', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-hbcake.jpg', subCategory: 'Travel', id:7, location: 'melbourne'},
      {title: 'Boozy Popcorn', price: 48, description: 'Celebrate the season with three 8 oz. bags the holidays most popular flavors: Vanilla Bean Cocoa Nib, Mayan Chile Chocolate and a special holiday 2015 flavor, Brandy Spiked Eggnog. The set comes in a black frame box finished with a festive red ribbon.', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-popcorn.jpg', subCategory: 'featured', id:8, location:'sydney'},
      {title: 'Turtle Pralines', price: 49, description: 'Fresh Georgia pecans are covered in silky hand-stirred caramel and rich chocolate to make our favorite chocolate nutty treats. This gift box includes an assortment of milk, dark and white chocolate turtles. It’s crunchy, creamy and chocolatey all in one bite.', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-sampler.jpg', subCategory: 'Auto', id:9, location:'perth'},
      {title: 'Maine Lobster', price: 199, description: 'Best lobster you will ever eat!', image: 'https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-lobster.jpg', subCategory: 'featured', id:10, location: 'melbourne'}
    ]

  }]);
angular.module('App')
  .controller('ListItemCtrl', function($scope, ShareData, $window, $rootScope, Item, $q){
    
    Item.getItems()
    .success(function(returnData){
      console.log('data returned');
      $scope.items = returnData;
    }).error(function(){
      console.log('no data');
    })

    $scope.selectedDropdownItem = "";
    
    $scope.categoryItems = [
      'all',
      'beverage',
      'bread',
      'cake',
      'cheese',
      'dessert',
      'pie',
      'pasta',
      'sauce',
      'snack'
    ] 

    var categoryInput;

    $scope.itemSelected = function(item){
      categoryInput = item;
      console.log(categoryInput);
    }

    var newCategoryItems = [];
    $scope.filterDropdown = function(userInput){
      console.log(userInput);
      if(userInput !== ""){
        categoryInput = userInput;
      }
      var filter = $q.defer();
      var normalisedInput = userInput.toLowerCase();
      var filteredArray = $scope.categoryItems.filter(function(menu){
        return menu.toLowerCase().indexOf(normalisedInput) === 0;
      });
      // console.log(userInput);
      // console.log($scope.inputValue);
      filter.resolve(filteredArray);
      // console.log(filteredArray);
      // console.log(userInput);

      return filter.promise;
    
    }

    // main page search 
    $scope.dataToShare = [];
    $scope.searchQuery = function(filterLocation, filterCategory){
     
      $scope.searchLocation = filterLocation;
      $scope.searchCategory = categoryInput;
      console.log('searchLocation', $scope.searchLocation);
      console.log('searchCategory', $scope.searchCategory);
    }
  });

angular.module('App')
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

    var getData = function(){
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
    $scope.dataToShare = [];
    $scope.shareMyData = function(filterLocation, filterCategory){
     
      if($scope.selectedDropdownItem !== null){
        console.log($scope.selectedDropdownItem);
        $scope.dataToShare = [];
        $scope.dataToShare.push(filterLocation, $scope.selectedDropdownItem);        
      } else {
        $scope.dataToShare.push(filterLocation);
        $scope.dataToShare.push(categoryInput);
      }
      // console.log(categoryInput);
      // console.log($scope.dataToShare);
      // console.log($scope.selectedDropdownItem);
      ShareData.addData($scope.dataToShare);
    }    

  });
