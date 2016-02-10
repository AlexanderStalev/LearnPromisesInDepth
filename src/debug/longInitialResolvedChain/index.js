angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            /* Отладка fullfilled промиса с 3 then, созданным в обработчике ng-click.*/
            $q
                .resolve('a')
                .then(function (params) {
                    return params + 'b';
                })
                .then(function (params) {
                    return params + 'c';
                })
                .then(function (params) {
                    return params + 'd';
                })
        }        
    });