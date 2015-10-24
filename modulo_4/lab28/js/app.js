angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/product', {
	    templateUrl : "views/product.html",
	    controller: 'productController'
	})

	.when('/contact', {
		templateUrl: "views/contact.html",
		controller: 'contactController'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'views/otherwise.html'
	});
 }]);