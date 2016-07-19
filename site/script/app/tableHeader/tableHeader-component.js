define(['../setting/app-components', 'lodash'], function(components, _) {
    'use strict';

    tableHeaderController.$inject = ['tableSettings'];

    function tableHeaderController(tableSettings) {
        var ctrl = this;

        this.$onInit = function() {
            this.model.$render = function() {
                var obj = ctrl.model.$viewValue;

                ctrl.name = obj.name;
                ctrl.price = obj.price;
                ctrl.count = obj.count;
            };
        };

        ctrl.reverse = false;
        ctrl.sortBy = tableSettings.sortBy;

        var order = tableSettings.order;

        ctrl.sort = function(sortBy) {
            ctrl.reverse = (ctrl.sortBy === sortBy) ? !ctrl.reverse : false;
            order = ctrl.reverse ? 'desc' : 'asc';

            ctrl.sortingBy(sortBy, order);

            ctrl.sortBy = sortBy;
        };

        ctrl.sortingBy(ctrl.sortBy, order);

        ctrl.setName = function(setter) {
            if (!_.isUndefined(setter)) {
                ctrl.name = setter;
                setValue();
            } else {
                return ctrl.name;
            }
        };

        ctrl.setPrice = function(setter) {
            if (!_.isUndefined(setter)) {
                ctrl.price = setter;
                setValue();
            } else {
                return ctrl.price;
            }
        };

        ctrl.setCount = function(setter) {
            if (!_.isUndefined(setter)) {
                ctrl.count = setter;
                setValue();
            } else {
                return ctrl.count;
            }
        };

        function setValue() {
            ctrl.model.$setViewValue({
                name: ctrl.name,
                price: ctrl.price,
                count: ctrl.count
            });
        }
    }

    components.component('tableHeader', {
        templateUrl: './script/app/tableHeader/tableHeader.html',
        require: {
            model: 'ngModel'
        },
        controller: tableHeaderController,
        bindings: {
            sortingBy: '<'
        }
    });
});