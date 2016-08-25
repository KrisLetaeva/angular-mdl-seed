
(function() {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

    function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $logProvider.debugEnabled(true);
        $httpProvider.interceptors.push('httpInterceptor');
        $stateProvider
            .state('root', {
                views: {
                    'header': {
                        templateUrl: 'app/partials/header/header.html',
                        controller: 'HeaderCtrl'
                    },
                    'footer': {
                        templateUrl: 'app/partials/footer/footer.html',
                        controller: 'FooterCtrl'
                    }
                }
            });
    }

    function HeadCtrl($log) {
        $log.debug('HeadCtrl laoded!');
    }

    function run($log) {
        $log.debug('App is running!');
    }

    angular.module('app', [
        'ui.router',
        'home',
        'getting-started',
        'partials.header',
        'partials.footer',
        'core.services.data',
        'core.directives.version',
        'core.filters.uppercase',
        'core.interceptors.http',
    ])
        .config(config)
        .run(run)
        .controller('HeadCtrl', HeadCtrl)
        .value('version', '1.1.0');
})();
