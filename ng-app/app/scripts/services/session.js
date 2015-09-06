// Check with backend

angular.module('App')
.service('Session', function () {
  this.create = function (sessionId, uid, userRole) {
    this.id = sessionId;
    this.uid = uid;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.uid = null;
    this.userRole = null;
  };
});