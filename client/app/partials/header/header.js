(function() {
  'use strict';

  function headerCtrl($log) {
    $log.debug('Header loaded');
  }

  angular.module('partials.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
