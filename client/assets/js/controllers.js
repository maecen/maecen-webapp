(function(){
  angular.module("controllers", ["services", "resources", "foundation.core"])

  /*=============================== SLIDEIN CONTROLLER =====================================*/
<<<<<<< HEAD
  .controller("SlideInCtrl", function(){
    
=======
  .controller("SlideInCtrl", function($scope, $translate){
    $scope.selectedLang = "da";
    $scope.setLanguage = function(){
      console.log($scope.selectedLang);
      $translate.use($scope.selectedLang);
    };
>>>>>>> 7a371a8e47655351ad564cf9e638f949dd0eb888
  })

  /*=============================== REGISTRATION CONTROLLER =================================*/
  .controller('RegistrationCtrl', function($scope, $auth, Project, FoundationApi) {
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
        })
        .catch(function(resp) {
          // handle error
          $scope.formErrors = resp.data.errors
          console.error(resp);
          FoundationApi.publish('error-notifications', { title: 'Fejl!', content: resp.data.errors });
        });
    };

  })

/*=============================== LOGIN CONTROLLER =================================*/
  .controller('LoginCtrl', function($scope, $auth, FoundationApi) {

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
          FoundationApi.publish('error-notifications', { title: 'Fejl!', content: resp.data.errors });
        });
    };

  })

/*=============================== CREATE PROJECT CONTROLLER =================================*/
  .controller("CreateProjectCtrl", function($scope, $auth, $http, $location, Project, FoundationApi) {
     $scope.newProject = {
       project: {
         title: "",
         description: "",
         category: "",
         teaser: "",
         homepage: "",
         cover_image: "",
         logo: ""
       }
     };

     // Filthy fileupload logic...
     $scope.coverImageChanged = function(){
       console.log("Called it!");
       var file = document.getElementById('cover_image_upload').files[0];
       fileReader = new FileReader();
       fileReader.onloadend = function(){
         $scope.newProject.project.cover_image = fileReader.result;
       }
       fileReader.readAsDataURL(file);
     };

     $scope.logoChanged = function(){
       console.log("Logo input changed");
       var file = document.getElementById('logo_upload').files[0];
       fileReader = new FileReader();
       fileReader.onloadend = function(){
         $scope.newProject.project.logo = fileReader.result;
          console.log("Loaded dat logo!");
       }
       fileReader.readAsDataURL(file);
     };

     $scope.createProject = function(){
       console.log($scope.newProject.project.cover_image);
       //console.log($auth.retrieveData('auth_headers'));

       var project = new Project($scope.newProject);
       project.$save().then(function(resp) {
         // handle success response
         console.log(resp);
       })
       .catch(function(resp) {
         // handle error response
         console.log(resp);
         //FoundationApi.publish('error-notifications', { title: 'Fejl!', content: resp.data.errors });
       });
     };

  })
  /*=============================== PROJECTS CONTROLLER =================================*/

  .controller("ProjectsCtrl", function($scope, $stateParams, $auth, $http, Project, FoundationApi) {
    $scope.projects = Project.query();
    console.log($stateParams.id);
  })

  /*=============================== PROFILE CONTROLLER =================================*/
    .controller("ProfileCtrl", function($scope, $auth, User, FoundationApi, $location) {

      $scope.editing = false;

      $scope.enableEditing = function(){
        $scope.editing = true;
      }

      $scope.disableEditing = function(){
        $scope.editing = false;
      }

      $scope.signOut = function(){
        $auth.signOut()
          .then(function(resp) {
            // handle success response
            FoundationApi.publish('success-notifications', { title: 'Success!', content: 'Du er nu logget ud', color: "success", autoclose: 1500 });
            console.log(resp);
            $location.url("/");
          })
          .catch(function(resp) {
            // handle error response
            console.log(resp);
          });
      };

      $scope.submitUpdate = function(){
        $auth.updateAccount($auth.user)
          .then(function(resp) {
            // handle success response
            FoundationApi.publish('success-notifications', { title: 'Success!', content: 'Din profil er nu opdateret', color: "success", autoclose: 1500 });
            $scope.editing = false;
            console.log(resp);
          })
          .catch(function(resp) {
            // handle error response
            FoundationApi.publish('error-notifications', { title: 'Fejl', content: resp.data, color: "alert", autoclose: 1500 });
            console.error(resp);
          });
      };

    })


})();
