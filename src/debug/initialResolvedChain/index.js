angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            /* Отладка fulfilled промиса с одним then, созданного в обработчике ng-click.*/
            $q
                .resolve('a')
                .then(function (params) {
                    return params + 'b';
                })
        }        
    });