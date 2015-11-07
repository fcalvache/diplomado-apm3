 angular.module('initial_spi', ['ngRoute'])
               .config(['$routeProvider', function($routeProvider){
            /*
             * `when()` cuantas veces sea necesario
             * `otherwise()` una sola vez "OJO"
            */
            $routeProvider
            .when('/home', {
                templateUrl : "otherwise.html"
            })
            
            .when('/about', 
                {
                    templateUrl: "about.html"
            })
             .when('/contact', 
                {
                    templateUrl: "contact.html"
                })
            
            .otherwise({
                redirectTo: '/',
                templateUrl: 'otherwise.html'
            });
               }])