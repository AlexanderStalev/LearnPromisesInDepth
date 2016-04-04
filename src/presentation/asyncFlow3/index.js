angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        var promise = $q.resolve();
        console.log(promise.$$state.status === 1); // fulfilled.

        var promise2 = promise.then(function() {});
        console.log(promise2.$$state.status === 0); // pending.

        $scope.$evalAsync(function() {
            console.log(promise2.$$state.status === 1); // fulfilled.
        });
    });

//$scope.$evalAsync(function () {
//    console.log('async');
//});
//$scope.$applyAsync(function () {
//    console.log('$applyAsync');
//})
