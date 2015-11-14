angular.module('lab10', ['ngRoute', 'lab8','lab9'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/lab8', 
        {
            templateUrl: "views/lab8.html",
            controller: 'lab8Controller'
        })

    .when('/lab9', 
        {
            templateUrl: "views/lab8.html",
            controller: 'lab9Controller'
        })

    .otherwise({
        redirectTo: '/',
        templateUrl: 'views/otherwise.html'
    });
 }]);