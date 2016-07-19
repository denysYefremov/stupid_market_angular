define([
    '../setting/app-components',
    'lodash'], function(components, _) {
    'use strict';

    tableController.$inject = ['apiPart'];

    function tableController(apiPart) {
        var ctrl = this;

        ctrl.shopItems = apiPart.get();
        ctrl.filterObj = {
            name: null,
            price: null,
            count: null
        };

        ctrl.sort = function(sortBy, order) {
            ctrl.shopItems = _.orderBy(ctrl.shopItems, [sortBy], [order]);
        };

        ctrl.filter = function(setter) {
            if (!_.isUndefined(setter)) {
                ctrl.filterObj = setter;
                useFilter();
            } else {
                return ctrl.filterObj;
            }
        };

        function useFilter() {

            ctrl.shopItems = _.filter(ctrl.shopItems);

        }
    }

    components.component('shopTable', {
        templateUrl: './script/app/table/table.html',
        controller: tableController
    });
});