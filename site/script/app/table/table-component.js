define([
    '../setting/app-components',
    'lodash'], function(components, _) {
    'use strict';

    tableController.$inject = ['apiPart'];

    function tableController(apiPart) {
        var ctrl = this;

        ctrl.shopItems = apiPart.get();
        ctrl.filteObj = {
            name: null,
            price: null,
            count: null
        };

        ctrl.sort = function(sortBy, order) {
            ctrl.shopItems = _.orderBy(ctrl.shopItems, [sortBy], [order]);
        };

        ctrl.filter = function(text) {}
    }

    components.component('shopTable', {
        templateUrl: './script/app/table/table.html',
        controller: tableController
    });
});