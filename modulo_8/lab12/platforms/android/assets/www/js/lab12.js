angular.module('lab12', ['ngCordova'])

.controller('lab12Controller', function($scope, $cordovaDialogs){

	console.log('load lab12Controller');

	$scope.active_alert =function(){
		$cordovaDialogs.alert('nCordova', 'Hola!', 'Aceptar')
	    .then(function() {
	       $scope.lab="lab12";
	    });
	};

	$scope.activr_prompt = function(){

		$cordovaDialogs.prompt('Indicar algo', 'prompt', ['Aceptar','Cancelar'], 'Indique su edad')
		    .then(function(result) {
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;

		      if (btnIndex === 1) {
		      	$scope.edad="La edad es: " + input;
		      	console.log('el input es: ' + input);
		      } 
		      else {
		      	$scope.edad="Cancelo la respuesta";
		      	console.log('Usted cancelo');
		      }
        })
	};
	$scope.active_confirm = function(){

		 $cordovaDialogs.confirm('Oye que vas a utilizar', 'Confirmar', ['Aceptar','Cancelar', 'Volver'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;

		      if (btnIndex === 0) {
		      		$scope.boton="Sin respuesta";
		      } 

		      else if(btnIndex===1){
		      	$scope.boton="El botón es Aceptar";
		      	console.log('El botón es Aceptar');
		      }
			else if(btnIndex===3){
		      	$scope.boton="El botón es Volver";
		      	console.log('El botón es Volver');
		      }
		      else {
		      	$scope.boton="El botón es Cancelar";
		      	console.log('El botón es Cancelar');
		      }

    	});
	};
});