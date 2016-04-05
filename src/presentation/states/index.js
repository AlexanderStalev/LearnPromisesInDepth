angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        (function (){
            var deferred = $q.defer(),
                promise = deferred.promise;

            console.log(promise.$$state.status); // 0 - pending.
            console.log(promise.$$state.value);  // undefined.

            deferred.resolve('data');

            console.log(promise.$$state.status); // 1 - fulfilled.
            console.log(promise.$$state.value);  // 'data'.
        })();

        (function (){
            var deferred = $q.defer(),
                promise = deferred.promise;

            console.log(promise.$$state.status); // 0 - pending.
            console.log(promise.$$state.value);  // undefined.

            deferred.reject('error');

            console.log(promise.$$state.status); // 2 - rejected.
            console.log(promise.$$state.value);  // 'error'.
        })();

        (function (){
            var deferred = $q.defer(),
                promise = deferred.promise,
                promise2 =  $q.resolve('data');

            console.log(promise.$$state.status); // 0 - pending.
            console.log(promise.$$state.value);  // undefined.

            deferred.resolve(promise2);

            console.log(promise.$$state.status); // -1 - resolved.
            console.log(promise.$$state.value);  // undefined.
        })();

    });

//$scope.$evalAsync(function () {
//    console.log('async');
//});
//$scope.$applyAsync(function () {
//    console.log('$applyAsync');
//})
