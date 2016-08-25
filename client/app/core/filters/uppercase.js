(function() {
  'use strict';

  function uppercase() {
    return function(text) {
      return text ? text.toUpperCase() : text;
    };
  }

  angular.module('core.filters.uppercase', [])
    .filter('uppercase', uppercase);
})();
