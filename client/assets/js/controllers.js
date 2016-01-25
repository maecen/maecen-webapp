(function(){
  angular.module("controllers", ["services", "resources", "foundation.core"])

  /*=============================== SLIDEIN CONTROLLER =====================================*/
  .controller("SlideInCtrl", function($scope, $translate){
    $scope.selectedLang = "da";

    $scope.setLanguage = function(language){
      console.log($scope.selectedLang);
      $translate.use(language);
    };
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
          FoundationApi.publish('error-notifications', {content: resp.data.errors.full_messages });
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
          FoundationApi.publish('error-notifications', {content: resp.data.errors.full_messages });
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
    .controller("ProfileCtrl", function($scope, $auth, User, FoundationApi, $location, $translate) {
      $scope.selectedLanguage = $translate.preferredLanguage();

      $scope.$watch('selectedLanguage', function(){
        $translate.use($scope.selectedLanguage);
      });

      $scope.editing = false;
      $scope.userCopy = "";

      $scope.enableEditing = function(){
        $scope.userCopy = angular.copy($scope.user);
        $scope.editing = true;
      };

      $scope.disableEditing = function(){
        $scope.user = angular.copy($scope.userCopy, $scope.user);
        $scope.editing = false;
      };

      $scope.signOut = function(){
        $auth.signOut()
          .then(function(resp) {
            // handle success response
            FoundationApi.publish('success-notifications', {content: 'Du er nu logget ud', color: "success", autoclose: 1500 });
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
            FoundationApi.publish('success-notifications', {content: 'Din profil er nu opdateret', color: "success", autoclose: 1500 });
            $scope.editing = false;
            console.log(resp);
          })
          .catch(function(resp) {
            // handle error response
            FoundationApi.publish('error-notifications', {content: resp.data.errors.full_messages.join(", "), color: "alert", autoclose: 1500 });
            console.error(resp);
          });
      };

    })


})();
