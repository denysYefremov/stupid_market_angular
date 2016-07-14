define(['../setting/app-components'], function(components) {
    'use strict';

    tableHeaderController.$inject = ['tableSettings'];

    function tableHeaderController(tableSettings) {
        var ctrl = this;

        ctrl.reverse = false;
        ctrl.sortBy = tableSettings.sortBy;

        var order = tableSettings.order;

        ctrl.sort = function(sortBy) {
            ctrl.reverse = (ctrl.sortBy === sortBy) ? !ctrl.reverse : false;
            order = ctrl.reverse ? 'desc' : 'asc';

            ctrl.sortingBy(sortBy, order);

            ctrl.sortBy = sortBy;
        };

        ctrl.filter = function(text) {
            ctrl.filteringBy(text);
        };

        ctrl.sortingBy(ctrl.sortBy, order);
    }

    components.component('tableHeader', {
        templateUrl: './script/app/tableHeader/tableHeader.html',
        controller: tableHeaderController,
        bindings: {
            sortingBy: '<',
            filteringBy: '<'
        }
    });
});