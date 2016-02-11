angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            /* Отладка fulfilled промиса c then, созданного в обработчике ng-click.*/
            $q
                .resolve('a')
                .then(function (value) {
                    console.log('then with:' + value);
                })
        }        
    });