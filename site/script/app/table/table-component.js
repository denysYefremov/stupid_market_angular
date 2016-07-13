define(['../setting/app-components'], function(components) {
    'use strict';

    function tableController() {
        var ctrl = this;

        ctrl.sortBy = "name";
        ctrl.reverse = false;
    }

    components.component('shopTable', {
        templateUrl: './script/app/table/table.html',
        controller: tableController,
        bindings: {
            shopItems: '&',
            sortBy: '&',
            reverse: '&'
        }
    });
});