angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        $scope.text = 'hello';
        
        $scope.foo = function () {

            var fulfilledPromise = $q.resolve('result');

            fulfilledPromise
                .then(function (params) {
                    console.log(1);
                })
                .then(function (params) {
                    console.log(2);
                });

            fulfilledPromise
                .then(function (params) {
                    console.log(3);
                })
                .then(function (params) {
                    console.log(4);
                })

            console.log(5);
        }
        
        $scope.fooNative = function () {

            var fulfilledPromise = Promise.resolve('result');

            fulfilledPromise
                .then(function (params) {
                    console.log(1);
                })
                .then(function (params) {
                    console.log(2);
                });

            fulfilledPromise
                .then(function (params) {
                    console.log(3);
                })
                .then(function (params) {
                    console.log(4);
                })

            console.log(5);
        }
    });