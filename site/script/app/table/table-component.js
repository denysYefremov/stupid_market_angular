define([
    '../setting/app-components',
    'lodash'], function(components, _) {
    'use strict';

    tableController.$inject = ['apiPart'];

    function tableController(apiPart) {
        var ctrl = this;

        ctrl.shopItems = apiPart.get();
        ctrl.sortedItems = ctrl.shopItems;

        ctrl.filterObj = {
            name: null,
            price: null,
            count: null
        };

        ctrl.sort = function(sortBy, order) {
            ctrl.shopItems = _.orderBy(ctrl.shopItems, [sortBy], [order]);
            ctrl.sortedItems = _.orderBy(ctrl.sortedItems, [sortBy], [order]);
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
            if (!_.isUndefined(ctrl.filterObj.name) && !_.isNull(ctrl.filterObj.name)) {
                ctrl.shopItems = _.filter(ctrl.sortedItems, function (item) {
                    return item.name.indexOf(ctrl.filterObj.name) != -1;
                });
            }
            if (!_.isUndefined(ctrl.filterObj.price) && !_.isNull(ctrl.filterObj.price) && !_.isNaN(parseFloat(ctrl.filterObj.price))) {
                ctrl.shopItems = _.filter(ctrl.sortedItems, function (item) {
                    return parseFloat(item.price) === parseFloat(ctrl.filterObj.price);
                });
            }
            if (!_.isUndefined(ctrl.filterObj.count) && !_.isNull(ctrl.filterObj.count) && !_.isNaN(parseInt(ctrl.filterObj.count))) {
                ctrl.shopItems = _.filter(ctrl.sortedItems, function (item) {
                    return parseInt(item.count) === parseInt(ctrl.filterObj.count);
                });
            }
        }
    }

    components.component('shopTable', {
        templateUrl: './script/app/table/table.html',
        controller: tableController
    });
});