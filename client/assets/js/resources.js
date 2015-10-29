(function(){
  var baseUrl = "http://maecen-staging.herokuapp.com/"
  var urlVersion = "v1/"
  angular.module("resources", ["ngResource"])
  // Users
  .factory("User", function($resource) {
    return $resource(baseUrl+urlVersion+"users/:id");
  })
  // Projects
  .factory("Project", function($resource) {
    return $resource(baseUrl+urlVersion+"projects/:id");
  })

})();
