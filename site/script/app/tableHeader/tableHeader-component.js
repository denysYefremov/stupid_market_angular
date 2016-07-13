define(['../setting/app-components'], function(components) {
    'use strict';

    function tableHeaderController($scope) {
        var ctrl = this;

        ctrl.sortBy = $scope.$parent.$ctrl.sortBy;
        ctrl.reverse = $scope.$parent.$ctrl.reverse;

        ctrl.sort = function(sortBy) {
            ctrl.reverse = (ctrl.sortBy === sortBy) ? !ctrl.reverse : false;
            ctrl.sortBy = sortBy;
        }
    }

    components.component('tableHeader', {
        templateUrl: './script/app/tableHeader/tableHeader.html',
        controller: tableHeaderController,
        bindings: {
            sortBy: '&',
            reverse: '&',
            sort: '&'
        }
    });
});