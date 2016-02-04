(function() {
  'use strict';

  angular.module('application', [
    'application.config',
    'ui.router',
    //'ngAnimate',

    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    // custom
    'controllers',
    'ngResource',
    'services',
    'resources',
    'filters',
    'ng-token-auth',
    'pascalprecht.translate',
    'ipCookie'
  ])

  // Setup authenticantion
  .config(function($authProvider, apiUrl) {
    $authProvider.configure({
        apiUrl: apiUrl,
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
      enabled: false,
      requireBase: false
    });

    //$locationProvider.hashPrefix('!');
  }

  function run($rootScope) {
    FastClick.attach(document.body);
    $rootScope.ready = true;
  }

})();
