define(['../setting/app-components'], function(components) {
    'use strict';

    function tableBodyController($scope) {
        var ctrl = this;

        ctrl.shopItems = [
            { name: "Fish", price: 20.5, count: 10 },
            { name: "Meat",  price: 80.2, count: 3 },
            { name: "Beam", price: 10, count: 5 },
            { name: "Popcorn", price: 2.25, count: 11 },
            { name: "Water", price: 0.15, count: 100 }
        ];

        ctrl.sortBy = $scope.$parent.$ctrl.sortBy;
        ctrl.reverse = $scope.$parent.$ctrl.reverse;
    }

    components.component('tableBody', {
        templateUrl: './script/app/tableBody/tableBody.html',
        controller: tableBodyController,
        bindings: {
            shopItems: '&',
            sortBy: '&',
            reverse: '&'
        }
    });
});