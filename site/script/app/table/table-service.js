define(['../setting/app-services'], function(service) {

    function apiPart() {
        var srv = this;

        srv.shopItems = [
            { name: "Fish", price: 20.5, count: 10 },
            { name: "Meat",  price: 80.2, count: 3 },
            { name: "Beam", price: 10, count: 5 },
            { name: "Popcorn", price: 2.25, count: 11 },
            { name: "Water", price: 0.15, count: 100 }
        ];
    }

    apiPart.prototype.get  = function() {
        return this.shopItems;
    };

    service.service('apiPart', apiPart);
});