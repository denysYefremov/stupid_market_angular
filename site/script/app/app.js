/* Main angular application. Describe all dependencies */
define([
    'angular',
    'setting/app-path' //local path of components (controllers, directives, filters and services)
], function(angular) {
    'use strict';
    return angular.module('app', [
        /*'app.services',
         'app.filters',
         'app.directives',
        'app.controllers',*/
        'app.components',
        'ngRoute'
    ]);
});