angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        $scope.text = 'hello';
        $scope.foo = function () {
            /* Отладка pending промиса c then, созданного в обработчике ng-click.*/
            $q(function (resolve, reject) {
                setTimeout(function () {
                    resolve('resolve by value from timeout.');
                }, 100);
            }).then(function (value) {
                console.log('then with value: ' + value)
            });
        }
    });