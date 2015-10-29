(function(){
  angular.module("controllers", ["services", "resources", "ipCookie"])

  /*=============================== HOME CONTROLLER =================================*/
  .controller('HomeCtrl', function($scope) {

  })

  /*=============================== REGISTRATION CONTROLLER =================================*/
  .controller('RegistrationCtrl', function($scope, $auth) {
    $scope.registrationForm = {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: ""
    };

    $scope.registrateUser = function(){
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
          console.log("Success!" + resp);
          alert("Du er nu registreret!");
        })
        .catch(function(resp) {
          // handle error response
          console.log("Error" + resp);
        });
    };

  })

/*=============================== LOGIN CONTROLLER =================================*/
  .controller('LoginCtrl', function($scope, $auth, ipCookie) {

    $scope.loginParams = {
      email: "",
      password: ""
    };

    $scope.login = function(){
      $auth.submitLogin($scope.loginParams)
        .then(function(resp) {
          // handle success response
          console.log("Login success");
          console.log(resp);
          var cookie = ipCookie("auth_headers");
          ipCookie.remove("auth_headers");
          console.log(ipCookie("auth_headers", cookie, {domain: "maecen-staging.herokuapp.com"}));
        })
        .catch(function(resp) {
          // handle error response
          console.log("Login error!");
          console.log(resp);
        });
    };

  })

/*=============================== CREATE PROJECT CONTROLLER =================================*/
  .controller("CreateProjectCtrl", function($scope, $auth, $http) {
     $scope.newProject = {
       project: {
         title: "",
         description: "",
         category: ""
       }
     };

     $scope.createProject = function(){
       //console.log($scope.newProject);
       $http({
         method: 'POST',
         url: 'https://maecen-staging.herokuapp.com/v1/projects',
         data: $scope.newProject
       }).then(function successCallback(response) {
           // this callback will be called asynchronously
           // when the response is available
           console.log("Success!");
           console.log(response);
         }, function errorCallback(response) {
           // called asynchronously if an error occurs
           // or server returns response with an error status.
           console.log("Error!");
           console.log(response);
         });
     };

  })

})();
