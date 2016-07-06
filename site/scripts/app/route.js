define(['app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'scripts/app/main/main.html',
            controller: 'main'
        });

        $routeProvider.when('/about', {
            templateUrl: 'scripts/app/about/about.html',
            controller: 'about'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});