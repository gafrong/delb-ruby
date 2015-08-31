angular.module('Eapp')
  .controller('LoginCtrl', function ($scope, userService, angularFireAuth) {
    var url = "https://example.firebaseio.com";
    angularFireAuth.initialize(url, {scope: $scope, name: "user"});

    $scope.login = function() {
        angularFireAuth.login("github");

    };
    $scope.logout = function() {
        angularFireAuth.logout();
    };

    $scope.$on("angularFireAuth:login", function(evt, user) {
      userService.username = $scope.user;
      userService.isLogged = true;
    });

    $scope.$on("angularFireAuth:logout", function(evt) {
      userService.isLogged = false;
      userService.username = null;
    });
});