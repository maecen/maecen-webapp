(function(){
angular.module("hest", ["pascalprecht.translate"])
.config(function ($translateProvider) {

  /*======================================= DANISH TRANSLATION ==============*/
  $translateProvider.translations('da', {
    /*======= Homepage ========*/
    REG_BUTTON: 'Registrer nu!',
    CREATIVE_TITEL: "Kreativ",
    MAECEN_TITEL: "Mæcen",
    /*======= Registration ========*/

  });

  // Set default (preffered) language
  $translateProvider.preferredLanguage('da');

})

})();
