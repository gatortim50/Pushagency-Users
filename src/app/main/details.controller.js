(function () {
  'use strict';

  angular
    .module('push')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($window, $stateParams, MainService) {
    var vm = this;

    //$window.console.log('user id', $stateParams.userId);
    vm.id = $stateParams.userId;

    var onComplete = function (data) {
      vm.tasks = data;
      $window.console.log("tasks: ", angular.toJson(vm.tasks));
    };

    var onError = function (reason) {
      vm.error = reason;
    };

    MainService.getTasks(vm.id)
      .then(onComplete, onError);

  }

}());
