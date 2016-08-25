(function() {
  'use strict';

  function footerCtrl($log) {
    $log.debug('Footer loaded');
  }

  angular.module('partials.footer', [])
    .controller('FooterCtrl', footerCtrl);
})();
