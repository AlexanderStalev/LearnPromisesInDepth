angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        var deferred = $q.defer();

        $scope.create = function () {
            deferred.promise
                .then(function (params) {
                    return $q(function (resolve) {
                        setTimeout(function () {
                            resolve(params + 'b');
                        }, 200);
                    });
                })
                .then(function (params) {
                    return params + 'c';
                })
                .then(function (params) {
                    throw new Error(params + 'd');
                })
                .catch(function (error) {
                    console.log(error.message + 'e');
                });
        }

        $scope.resolve = function () {
           deferred.resolve('a');
        }
    });