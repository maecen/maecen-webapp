(function(){
  angular.module("controllers", ["services", "resources", "ipCookie"])

  /*=============================== HOME CONTROLLER =================================*/
  .controller('HomeCtrl', function($scope) {

  })

  /*=============================== REGISTRATION CONTROLLER =================================*/
  .controller('RegistrationCtrl', function($scope, $auth, $http, Project) {
    $scope.registrationForm = {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: ""
    };

    $scope.project = Project.get({id:1});

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
          alert('error');
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
  .controller("CreateProjectCtrl", function($scope, $auth, $http, Project) {
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

       var project = new Project($scope.newProject);
       project.$save();
     };

  })
  /*=============================== PROJECTS CONTROLLER =================================*/

  .controller("ProjectsCtrl", function($scope, $auth, $http, Project) {
    $scope.projects = Project.query();
    console.log($scope.projects);

    $scope.createProject = function(){
       console.log($auth.retrieveData('auth_headers'));

       var project = new Project($scope.newProject);
       project.$save();
     };

  })

  /*=============================== PROFILE CONTROLLER =================================*/
    .controller("ProfileCtrl", function($scope, $auth, User) {
      $scope.submitUpdate = function(){
        $auth.updateAccount($auth.user)
          .then(function(resp) {
            // handle success response
            alert("Succes!");
            console.log(resp);
          })
          .catch(function(resp) {
            // handle error response
            alert("Error!");
            console.error(resp);
          });
      };
    })


})();
