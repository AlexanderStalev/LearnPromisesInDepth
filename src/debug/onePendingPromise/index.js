angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            /* Отладка pending промиса, созданного в обработчике ng-click.*/
            $q(function (resolve, reject) {
                setTimeout(function () {
                   resolve('resolve by value from timeout'); 
                }, 100);   
            })
        }        
    });