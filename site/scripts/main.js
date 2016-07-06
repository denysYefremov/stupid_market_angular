require.config({
    baseUrl: 'scripts/app',
    paths: {
        'jquery': '../../../bower_components/jquery/dist/jquery',
        'resizer': '../../../bower_components/javascript-detect-element-resize/jquery.resize',
        'bootstrap': '../../../bower_components/bootstrap/dist/js/bootstrap',
        'angular': '../../../bower_components/angular/angular',
        'angular-route': '../../../bower_components/angular-route/angular-route',
        'angular-gridster': '../../../bower_components/angular-gridster/dist/angular-gridster.min'
    },
    shim: {
        'bootstrap': { deps: ['jquery'] },
        'resizer' : { deps: ['jquery'] },
        'angular': {
            deps: ['bootstrap'],
            'exports': 'angular'
        },
        'angular-route': { deps: ['angular']}
    }
});

require([
    'angular',
    'app',
    'route',
    'run',
    'angular-route',
    'angular-gridster'
], function(angular, app) {
    'use strict'
    angular.bootstrap(document, ['app']);
});
