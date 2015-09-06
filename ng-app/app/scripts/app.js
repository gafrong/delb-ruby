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
    'Devise'
  ])
  .run(['$rootScope', '$location', function($rootScope, $location, $window) {
    $rootScope.$on('auth:login-success', function(userInfo) {
      console.log(userInfo);
      $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
      $location.path('/');
    });
    $rootScope.$on("$routeChangeSuccess", function(userInfo) {
      console.log(userInfo);
    });
  }])
  // .config(function($authProvider){
  //   $authProvider.configure({
  //     apiUrl: '/api'
  //   })
  // })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          auth: ["$q", "authenticationSvc", function($q, authenticationSvc) {
            var userInfo = authenticationSvc.getUserInfo;
console.log(authenticationSvc.user);
            if (userInfo) {
              return $q.when(userInfo);
            } else {
              return $q.reject({ authenticated: false });
            }
          }]
        }
      })
      .when('/signin', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl',
        resolve: {
          auth: ["$q", "authenticationSvc", function($q, authenticationSvc) {
            var userInfo = authenticationSvc.getUserInfo;
console.log(authenticationSvc.user);
            if (userInfo) {
              return $q.when(userInfo);
            } else {
              return $q.reject({ authenticated: false });
            }
          }]
        }
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

