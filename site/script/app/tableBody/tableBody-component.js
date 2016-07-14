define(['../setting/app-components'], function(components) {
    'use strict';

    components.component('tableBody', {
        templateUrl: './script/app/tableBody/tableBody.html',
        bindings: {
            items: '<'
        }
    });
});