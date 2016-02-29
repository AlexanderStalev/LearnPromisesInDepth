angular
    .module('myApp', [])
    .controller('myController', function($scope, $q){
        $scope.text = 'hello';
        $scope.foo =  function () {
            $q
                .resolve('A')
                .finally(function (value) {
                    value+='B';
                    var defer = $q.defer();
                    
                    setTimeout(function () {
                         console.log(value);
                        console.log('finally promise resolved');
                        defer.resolve(value);
                    }, 200)
                    
                    return defer.promise;
                })
                .then(function (value) {
                     console.log('then после finally.');
                      console.log(value);
                })
        }       
    });