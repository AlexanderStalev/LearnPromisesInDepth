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

        $scope.foo2 = function () {

            var fulfilledPromise = $q.resolve(1);

            fulfilledPromise
                .then(null)
                .then(function (value) {
                    console.log(value);
                });

            fulfilledPromise
                .then(function (params) {
                    console.log(2);
                })
                .then(function (params) {
                    console.log(3);
                });

            //console.log(5);
        }

        $scope.foo3 = function () {

            var fulfilledPromise = $q.resolve(1);

            fulfilledPromise
                .then(undefined)
                .then(function (value) {
                    console.log(value);
                });

            fulfilledPromise
                .then(function (value) {
                    console.log(2);
                })
                .then(function (value) {
                    console.log(3);
                });


            $scope.foo4 = function () {

                var fulfilledPromise = $q.resolve('result');

                fulfilledPromise
                    .finally(function (params) {
                        console.log(1);
                    })

                fulfilledPromise
                    .then(function (params) {
                        console.log(2);
                    })
                    .then(function (params) {
                        console.log(3);
                    });

                console.log(4);
            }

            $scope.foo5 = function () {

                var fulfilledPromise = $q.resolve('result');

                fulfilledPromise
                    .finally(function (params) {
                        console.log(1);
                    })
                    .then(function (params) {
                        console.log(2);
                    })

                fulfilledPromise
                    .then(function (params) {
                        console.log(3);
                    })
                    .then(function (params) {
                        console.log(4);
                    });

                //console.log(5);
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
                    });

                console.log(5);
            }
        }
    });