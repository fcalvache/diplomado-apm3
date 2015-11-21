angular.module('lab17', ['ngCordova'])

    .controller('lab17Controller', function($scope, $cordovaDevice){

        document.addEventListener('deviceready', function(){

        	 var device = $cordovaDevice.getDevice();
        	 
            $scope.info = $cordovaDevice.getDevice();

            console.log($scope.info);

         	$scope.manufacturer = device.manufacturer;
            $scope.model = device.model;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;

        }, false);
});