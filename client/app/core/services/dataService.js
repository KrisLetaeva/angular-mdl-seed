(function() {
  'use strict';

  function dataService() {
    return {
      get: function() {
        return ['some', 'data'];
      }
    };
  }

  angular.module('core.services.data', [])
    .factory('DataService', dataService);
})();
