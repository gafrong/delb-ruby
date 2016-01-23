'use strict';

angular
  .module('App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'angularModalService',
    'ui.bootstrap',
    'ui.bootstrap.collapse',
    'naif.base64',
    'ngFileUpload',
    'inputDropdown'
  ])
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function(userInfo) {
      console.log(userInfo);
      $location.path('/');
    });
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sellmyproduct', {
        templateUrl: 'views/sellmyproduct.html',
        controller: 'ItemAddCtrl',
        // resolve: {      
        //   auth: ['$auth', '$location', function($auth, $location){
        //     if ($auth.user.id){
        //       console.log('user is logged in');
        //       return $auth.validateUser();
        //     } else {
        //       console.log('express error msg!!!');
        //       $location.path("/pleaselogin");
        //     }
        //   }]
        // }
      })
      .when('/signin', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/user_registrations/new.html',
        controller: 'UserRegistrationsCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl',
        // authenticate user before page view
        resolve: {
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }]
        }
      })
      .when('/shoppingcart', {
        templateUrl: 'views/shoppingcart.html',
        controller: 'CartCtrl',
        resolve: {      
          auth: ['$auth', '$location', function($auth, $location){
            if ($auth.user.id){
              console.log('user is logged in');
              return $auth.validateUser();
            } else {
              console.log('express error msg!!!');
              $location.path("/pleaselogin");
            }
          }]
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/pricing', {
        templateUrl: 'views/pricing.html',
        controller: 'PricingCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
        // resolve: {
        //   auth: ['$auth', function($auth){
        //     return $auth.validateUser();
        //   }]
        // }
      })
      .when('/listtest', {
        templateUrl: 'views/listtest.html',
        controller: 'ListItemCtrl'
      })
      .when('/list/:product', {
        templateUrl: 'partials/list-detail.html',
        controller: 'ListCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductCtrl'
      })
      .when('/searched/products', {
        templateUrl: 'views/products.html',
        controller: 'MainCtrl'
      })
      .when('/products/:id', {
        templateUrl: 'views/partials/product.html',
        controller: 'ProductListCtrl'
      })
      .when('/mystore', {
        templateUrl: 'views/mystore.html',
        controller: 'MystoreCtrl',
        // resolve: {
       
        //   auth: ['$auth', '$location', function($auth, $location){
        //     if ($auth.user.id){
        //       console.log('user is logged in');
        //       return $auth.validateUser();
        //     } else {
        //       console.log('express error msg!!!');
        //       $location.path("/pleaselogin");
        //     }
            
        //   }]
        // }
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl',
        // resolve: {      
        //   auth: ['$auth', '$location', function($auth, $location){
        //     if ($auth.user.id){
        //       console.log('user is logged in');
        //       return $auth.validateUser();
        //     } else {
        //       console.log('express error msg!!!');
        //       $location.path("/pleaselogin");
        //     }
        //   }]
        // }
      })
      .when('/message', {
        templateUrl: 'views/message.html',
        controller: 'MessageCtrl',
        // resolve: {      
        //   auth: ['$auth', '$location', function($auth, $location){
        //     if ($auth.user.id){
        //       console.log('user is logged in');
        //       return $auth.validateUser();
        //     } else {
        //       console.log('express error msg!!!');
        //       $location.path("/pleaselogin");
        //     }
        //   }]
        // }
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        // resolve: {      
        //   auth: ['$auth', '$location', function($auth, $location){
        //     if ($auth.user.id){
        //       console.log('user is logged in');
        //       return $auth.validateUser();
        //     } else {
        //       console.log('express error msg!!!');
        //       $location.path("/pleaselogin");
        //     }
        //   }]
        // }
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        resolve: {      
          auth: ['$auth', '$location', function($auth, $location){
            if ($auth.user.id){
              console.log('user is logged in');
              return $auth.validateUser();
            } else {
              console.log('express error msg!!!');
              $location.path("/pleaselogin");
            }
          }]
        }
      })
      .when('/pleaselogin', {
        template: "<h3 class='container center mg-top-100 height-min600'>You must Log In or Sign Up to access the page.</h3>"
      })
      .when('/phones', {
        templateUrl: 'views/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'views/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .when('/items', {
        templateUrl: 'views/partials/items.html',
        controller: 'ItemListCtrl'
      })
      .when('/items/:id', {
        templateUrl: 'views/partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      })
      .when('/item/new', {
        templateUrl: 'views/partials/new.html',
        controller: 'ItemAddCtrl',
        // resolve: {      
        //   auth: ['$auth', '$location', function($auth, $location){
        //     if ($auth.user.id){
        //       console.log('user is logged in');
        //       return $auth.validateUser();
        //     } else {
        //       console.log('express error msg!!!');
        //       $location.path("/pleaselogin");
        //     }
        //   }]
        // }
      })
      .when('/items/:id', {
        templateUrl: 'views/partials/item-detail.html', 
        controller: 'ItemDetailCtrl'
      })
      .when('/item/:id/edit', {
        templateUrl: 'views/partials/edit.html',
        controller: 'ItemUpdateCtrl',
        // resolve: {      
        //   auth: ['$auth', '$location', function($auth, $location){
        //     if ($auth.user.id){
        //       console.log('user is logged in');
        //       return $auth.validateUser();
        //     } else {
        //       console.log('express error msg!!!');
        //       $location.path("/pleaselogin");
        //     }
        //   }]
        // }
      })
      .when('', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
