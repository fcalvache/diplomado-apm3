angular.module('initial_spi.controllers', [])

.controller('productController', function($scope, $http){
	var url = "product.json"
	$http.get(url).success(function(response){
		$scope.products = response;
	})	
})
.controller('contactController', function(){
			
	$scope.reset = function(){
		$scope.name = '' ;
		$scope.phone = '' ;
		$scope.company = '' ;
	};
	$scope.submit = function(){
		localStorage.setItem('name', $scope.name );
		localStorage.setItem('phone', $scope.phone );
		localStorage.setItem('company', $scope.company );
	};	

	})
