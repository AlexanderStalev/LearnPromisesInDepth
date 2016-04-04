angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        $q.resolve()
            .then(function () {
                throw 'error';
                console.log(1);
            });

        $scope.$evalAsync(function() {
            console.log(2);
        });
    });

//$scope.$evalAsync(function () {
//    console.log('async');
//});
//$scope.$applyAsync(function () {
//    console.log('$applyAsync');
//})
