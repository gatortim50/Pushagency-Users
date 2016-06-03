(function() {
  'use strict';

  angular
    .module('push')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $window, MainService, NgTableParams) {
    var vm = this;

    var onComplete = function(data){
      vm.data = data;
      $window.sessionStorage.users = angular.toJson(data);
      $window.console.log("users: " + $window.sessionStorage.users);
    };

    var onError = function(reason){
      vm.error = reason;
    };

    activate();

    function activate() {

      MainService.getUsers()
        .then(onComplete)
        .catch(onError);

    }

    var data = vm.data;
    vm.tableParams = new NgTableParams({}, { dataset: data});

  }
})();
