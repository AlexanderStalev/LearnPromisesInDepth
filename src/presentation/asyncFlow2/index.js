angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        var promise = $q.resolve(1);

        console.log(promise.then() === promise); // true
        console.log(promise.then(undefined) === promise);
        console.log(promise.then(null) === promise);

        // Native
        console.log('native')

        var promise = Promise.resolve(1);

        console.log(promise.then() === promise);
        console.log(promise.then(undefined) === promise);
        console.log(promise.then(null) === promise);

        // Native
        console.log('blue bird')

        var promise = P.resolve(1);

        console.log(promise.then() === promise);
        console.log(promise.then(undefined) === promise);
        console.log(promise.then(null) === promise);
    });