angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        P.resolve(1)
            .finally(function (param) {
                console.log(param);
                return param + 1;
            })
            .then(function (param) {
                console.log(param)
            });
    });