angular
    .module('myApp', [])
    .controller('myController', function ($scope, $q) {
        $q.resolve(1)
            .then(function () {
                throw new Error('Ошибка');
            })
            .catch(function () {
                
            })


    });