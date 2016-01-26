(function(){
  var url = ""

  angular.module("application").config(function(apiUrl){
    url = apiUrl;
  });

  angular.module("resources", ["ngResource"])
  // Users
  .factory("User", function($resource) {
    return $resource(url+"/users/:id", { id: "@id"});
  })
  // Projects
  .factory("Project", function($resource) {
    return $resource(url+"/projects/:id");
  })

})();
