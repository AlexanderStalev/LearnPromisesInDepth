angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        var promise = $q.resolve('a');
        
        promise.then(function (param) {
            throw new Error();
        });
        promise.then(function (param) {
            console.log(param);
        });

       promise.then(function (param) {
            throw new Error();
        }).then(function (param) {
            console.log(param);
        });
    });