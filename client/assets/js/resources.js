(function(){
  var baseUrl = "http://maecen-staging.herokuapp.com/"
  //var baseUrl = "http://localhost:3000/"
  var urlVersion = "v1/"
  angular.module("resources", ["ngResource"])
  // Users
  .factory("User", function($resource) {
    return $resource(baseUrl+urlVersion+"users/:id", { id: "@id"});
  })
  // Projects
  .factory("Project", function($resource) {
    return $resource(baseUrl+urlVersion+"projects/:id");
  })

})();
