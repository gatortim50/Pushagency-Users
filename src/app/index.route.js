(function() {
  'use strict';

  angular
    .module('push')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('details', {
        url: '/details/:userId',
        templateUrl: 'app/main/details.html',
        controller: 'DetailsController',
        controllerAs: 'details'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
