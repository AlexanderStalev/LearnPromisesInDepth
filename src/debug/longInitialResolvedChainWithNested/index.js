angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            /* Отладка fullfilled промиса с 3 then, созданным в обработчике ng-click.*/
            $q
                .resolve('a')
                .then(function (params) {
                    var defer = $q.defer()
                     setTimeout(function () {
                         defer.resolve(params + 'b');
                     }, 200)
                     return defer.promise;
                })
                .then(function (params) {
                    throw new Error('Ошибка');
                    //return params + 'c';
                })
                .then(function (params) {
                    return params + 'd';
                })
        }        
    });