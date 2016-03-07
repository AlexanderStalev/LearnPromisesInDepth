angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        var deferred = $q.defer();

        $scope.thenWithFunction = function () {
            deferred
                .promise
                .then(function (params) {
                    console.log(1);
                    return params + '1';
                })
        }

        $scope.thenWithPromise = function () {
            deferred
                .promise
                .then($q.resolve(2));
        }

        $scope.addFinally = function () {
            deferred
                .promise
                .finally(function (params) {
                    return String(params) + 1;
                })
                .then(function (params) {
                    console.log(params + 2);
                })
        }


        $scope.addFinallyWithReject = function () {
            deferred
                .promise
                .finally(function (params) {
                    return $q.reject('reject from finally')
                })
                .then(function (params) {
                    console.log(params + 2);
                })
        }

        $scope.reject = function () {
            deferred.reject('rejecte by click!');
        }

        $scope.resolveDeferredByValue = function () {
            deferred.resolve('result');
        }

        $scope.resolveDeferredByPromise = function () {
            deferred.resolve($q.resolve(2));
        }

        $scope.resolveDeferredByFunction = function () {
            deferred.resolve(function () {
                return 2;
            });
        }
    });