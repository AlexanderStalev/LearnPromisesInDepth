angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        $scope.text = 'hello';
        $scope.foo = function () {
            /* Промисы и $evalAsync и eval и timeout.*/
            $q
                .resolve('a')
                .then(function (params) {
                    /* $scope.$apply(function () {
                         console.log('$apply b');   // Почему ошибка 3 раза?                     
                     });*/

                    setTimeout(function () {
                        console.log('set Timeout 0 before');
                    }, 0);

                    $scope.$applyAsync(function () {
                        console.log('$applyAsync b');
                    });

                    setTimeout(function () {
                        console.log('set Timeout 0 after');
                    }, 0);

                    $scope.$evalAsync(function () {
                        console.log('$evalAsync b');
                    });

                    $scope.$eval(function () {
                        console.log('$eval b');
                    });

                    console.log('b');

                    return params + 'b';
                })
                .then(function (params) {
                    $scope.$evalAsync(function () {
                        console.log('$evalAsync c');
                    });

                    console.log('c');

                    return params + 'c';
                })
                .then(function (params) {
                    $scope.$evalAsync(function () {
                        console.log('$evalAsync d');
                    });

                    console.log('d');

                    return params + 'd';
                });
        }
    });