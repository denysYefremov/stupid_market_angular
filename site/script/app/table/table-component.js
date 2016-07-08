define(['../setting/app-components'], function(components) {
    'use strict';

    function tableController() {
        var ctrl = this;

        ctrl.shopItems = [
            { name: "Fish", price: 20.5, count: 10 },
            { name: "Meat",  price: 80.2, count: 3 },
            { name: "Beam", price: 10, count: 5 },
            { name: "Popcorn", price: 2.25, count: 11 },
            { name: "Water", price: 0.15, count: 100 }
        ];

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