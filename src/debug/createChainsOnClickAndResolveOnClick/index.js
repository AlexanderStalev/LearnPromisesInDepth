angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        var deferredForOneThen = $q.defer(),
            deferredForTwoThens = $q.defer();

        $scope.createOne = function () {
            deferredForOneThen
                .promise
                .then(function (params) {
                    console.log('one');
                    return params + 'b';
                });
        }

        $scope.resolveOne = function () {
            deferredForOneThen.resolve('a');
        }

        $scope.createTwo = function () {
            deferredForTwoThens
                .promise
                .then(function (params) {
                    console.log('one');
                    return params + 'b';
                })
                .then(function (params) {
                    console.log('two');
                    return params + 'c';
                });
        }

        $scope.resolveTwo = function () {
            deferredForTwoThens.resolve('a');
        }
    });