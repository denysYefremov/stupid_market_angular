define(['../setting/app-components'], function(components) {
    'use strict';

    function tableController() {
        var ctrl = this;

        ctrl.sortBy = "name";
        ctrl.reverse = false;

        ctrl.sort = function(sortBy) {
            ctrl.reverse = (ctrl.sortBy === sortBy) ? !ctrl.reverse : false;
            ctrl.sortBy = sortBy;
        }
    }

    components.component('shopTable', {
        templateUrl: './script/app/table/table.html',
        controller: tableController,
        bindings: {
            table: '<'
        }
    });
});