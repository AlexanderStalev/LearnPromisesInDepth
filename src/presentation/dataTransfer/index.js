angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        $q.resolve('a')
            .then(function (param) {
                return param + 'b';
            })
            .then(function (param) {
                console.log(param);
            });

        $q.resolve('a')
            .then(function (param) {
               
            })
            .then(function (param) {
                console.log(param);
            })
    });