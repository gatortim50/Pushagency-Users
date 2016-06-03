(function () {
  'use strict';


  angular
  .module('push')
  .factory('MainService', MainService);

  /** @ngInject */
  function MainService($http, $window, PUSH_CONSTANTS) {

    return {

      getUsers: function () {

        var url = PUSH_CONSTANTS.APIurl + '/v1/api/users';
        $window.console.log("--- all users url: " + url);

        return $http.get(url)
          .then(function(response){
            return response.data;
          });
      },

      getTasks: function (id) {

        var url = PUSH_CONSTANTS.APIurl + '/v1/api/users/' + id + '/tasks';
        $window.console.log("--- tasks url: " + url);

        return $http.get(url)
          .then(function(response){
            return response.data;
          });
      }

    };

  }

}());
