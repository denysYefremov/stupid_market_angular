require.config({
   baseUrl: 'script/app',
    paths: {
        'jquery': '../../../bower_components/jquery/dist/jquery',
        'bootstrap': '../../../bower_components/bootstrap/dist/js/bootstrap',
        'angular': '../../../bower_components/angular/angular',
        'angular-route': '../../../bower_components/angular-route/angular-route',
        'lodash': '../../../bower_components/lodash/dist/lodash'
    },
    shim: {
        'bootstrap': { deps: ['jquery'] },
        'angular': {
            deps: ['bootstrap'],
            'exports': 'angular'
        },
        'angular-route': { deps: ['angular'] }
    }
});

require([
    'angular',
    'app',
    'route',
    'run',
    'angular-route'
], function(angular, app) {
    'use strict';
    angular.bootstrap(document, ['app'])
});
