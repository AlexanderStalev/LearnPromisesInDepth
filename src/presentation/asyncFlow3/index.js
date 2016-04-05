angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        var defer1 = $q.defer(),
            promise1 = defer1.promise,
            promise2,
            promise3,
            promise4;

        promise2 = promise1.then(function (params) {
            console.log(1);
        });
        promise3 = promise2.then(function (params) {
            console.log(2);
        });
        promise4 = promise3.then(function (params) {
            console.log(2);
        });





    });

//$scope.$evalAsync(function () {
//    console.log('async');
//});
//$scope.$applyAsync(function () {
//    console.log('$applyAsync');
//})
