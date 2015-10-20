'use strict';

angular.module('App')
  .factory('Phone', ['$resource', function($resource){
    return $resource('scripts/phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);  

