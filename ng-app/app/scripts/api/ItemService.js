'use strict';

angular.module('App')
  .factory('Item', ['$resource', 
    function($resource){
      return $resource('/api/v1/item.json/#' + ':id', {}, {
      });
    }]);
    // var endpoint = {
    //   GetItems: '/api/v1/item.json',
    //   GetItem: '/api/v1/item/'
    //   PostItem: '/api/v1/item'
    // };
    // return {
    //   getItems: function (returnData) {
    //     returnData = returnData || {};
    //     returnData.take = returnData.take || 10;
    //     returnData.skip = returnData.skip || 0;
    //     return $http.get(endpoint.GetItems);
    //   },
    //   getItem: function (id) {
    //     return $http.get(endpoint.GetItems, {
    //       params: {id: id},
    //       withCredentials: true,
    //       timeout: 80000
    //     });
    //   },
    //   postItem: function(title, image_url400, description, price){
    //     return $http.post(endpoint.PostItem, {
    //       title: title,
    //       image_url400: image_url400,
    //       description: description,
    //       price: price
    //     });
    //   }
  //   };
  // }]);