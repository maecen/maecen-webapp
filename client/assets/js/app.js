(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    // custom
    'controllers',
    'ngResource',
    'services',
    'resources',
    'filters',
    'ng-token-auth'
  ])


  // Setup authenticantion
  .config(function($authProvider) {
    $authProvider.configure({
        apiUrl: 'http://maecen-staging.herokuapp.com/v1',
        //apiUrl: 'http://localhost:3000/v1',
        storage: 'localStorage'
    });
  })
  // What's this?...
    .config(config)
    .run(run);

  // Setup routing
  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
