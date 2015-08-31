angular.module('App')
  .service('UserService', function(){
    return {
      isLogged: false;
      username: null;
    }
  })