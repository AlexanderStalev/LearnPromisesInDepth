angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            /* Отладка fullfilled промиса, созданного в обработчике ng-click.*/
            $q
                .resolve('a')
        }        
    });