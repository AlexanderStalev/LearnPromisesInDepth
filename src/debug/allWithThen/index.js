angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            /* Отладка all fulfilled промиса c then, созданного в обработчике ng-click.*/
            $q
                .all([
                    $q.resolve(1),
                    $q.resolve(2),                    
                ])
                .then(function (values) {
                    console.log('then with:' + values);
                })
        }       
        
         $scope.foo2 =  function () {
            /* Отладка all fulfilled промиса c then, созданного в обработчике ng-click.*/
            $q
                .all({
                    one: $q.resolve(1),
                    two: $q.resolve(2),                    
                })
                .then(function (values) {
                    console.log('then with:' + values);
                })
        }         
    });