angular.module('App')
  .factory('authenticationSvc',['$http', '$q', '$window', function($http, $q, $window){

    var userInfo = {};

    function login(userName, password) {
      var deferred = $q.defer();

      $http.post("/api/auth/signin", {
        userName: userName,
        password: password
      }).then(function(result) {
        console.log(result);
        userInfo = {
          accessToken: result.data.access_token,
          userName: result.data.userName
        };
        $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
        deferred.resolve(userInfo);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function getUserInfo() {
      return userInfo;
    };

    function init() {
      if ($window.sessionStorage["userInfo"]) {
        userInfo = JSON.parse($window.sessionStorage["userInfo"]);
      }
    }

    init();

    return {
      login: login,
      getUserInfo: getUserInfo
    };
  }]);