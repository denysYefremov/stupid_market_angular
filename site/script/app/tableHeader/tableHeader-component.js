define(['../setting/app-components', 'lodash'], function(components, _) {
    'use strict';

    tableHeaderController.$inject = ['tableSettings'];

    function tableHeaderController(tableSettings) {
        var ctrl = this,
            _name, _price, _count;

        this.$onInit = function() {
            this.model.$render = function() {
                var obj = ctrl.model.$viewValue;

                _name = obj.name;
                _price = obj.price;
                _count = obj.count;
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

        ctrl.name = function(setter) {
            if (!_.isUndefined(setter)) {
                _name = setter;
                setValue();
            } else {
                return _name;
            }
        };

        ctrl.price = function(setter) {
            if (!_.isUndefined(setter)) {
                _price = setter;
                setValue();
            } else {
                return _price;
            }
        };

        ctrl.count = function(setter) {
            if (!_.isUndefined(setter)) {
                _count = setter;
                setValue();
            } else {
                return _count;
            }
        };

        function setValue() {
            ctrl.model.$setViewValue({
                name: _name,
                price: _price,
                count: _count
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