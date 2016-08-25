(function() {
  'use strict';

  function versionDirective(version) {
    return {
      restrict: 'A',
      /*jshint unused:false*/
      link: function(scope, elm, attrs) {
        elm.text(version);
      }
    };
  }

  angular.module('core.directives.version', [])
    .directive('appVersion', versionDirective);
})();
