angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        //$q.resolve(1)
        //    .then($q.resolve(2))
        //    .then(function (value) {
        //        console.log(value);
        //    });

        $q.resolve(1)
            .then(function () {
                return {then: function() {}};
            })
            .then(function (value) {
                console.log(value);
            });

    });