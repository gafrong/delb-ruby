'use strict';

angular.module('App')
.controller('ProductCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }])
.controller('PhoneListCtrl', ['$scope', 'Phone', 'Item',
  function($scope, Phone, Item) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.items = Item.getItems();
  }])

.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
  
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);