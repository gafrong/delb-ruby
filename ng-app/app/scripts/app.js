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
    'ngFileUpload'
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
        controller: 'CartCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        resolve: {
          auth: ['$auth', function($auth){
            return $auth.validateUser();
          }]
        }
      })
      .when('/mystore', {
        templateUrl: 'views/mystore.html',
        controller: 'MystoreCtrl',
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl'
      })
      .when('/pleaselogin', {
        template: "<h4 class='container center mg-top-20'>Please Log In or Sign Up to access the page.</h4>"
      })
      .otherwise({
        redirectTo: '/'
      });
  });

