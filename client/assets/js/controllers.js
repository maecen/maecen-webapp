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
          console.log(resp);
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
         category: "",
         teaser: "",
         homepage:""
       }
     };

     $scope.createProject = function(){
       console.log($auth.retrieveData('auth_headers'));
       $http({
         method: 'POST',
         url: 'https://maecen-staging.herokuapp.com/v1/projects',
         headers: $auth.retrieveData('auth_headers'),
         data: $scope.newProject
       }).then(function successCallback(response) {
           // this callback will be called asynchronously
           // when the response is available
           alert("Success!");
           console.log(response);
         }, function errorCallback(response) {
           // called asynchronously if an error occurs
           // or server returns response with an error status.
           alert(response['data']);
           console.log(response);
         });
     };

  })

  /*=============================== CREATE PROJECT CONTROLLER =================================*/
    .controller("ProfileCtrl", function($scope, $auth) {
      $scope.updateAccount = {
        first_name: "",
        last_name: "",
        email: ""
      };
      $scope.submitUpdate = function(){
        $auth.updateAccount($scope.updateAccount)
          .then(function(resp) {
            // handle success response
            console.log("Succes!");
            console.log(resp);
          })
          .catch(function(resp) {
            // handle error response
            console.error(resp);
          });
      };


    })


})();
