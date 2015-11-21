angular.module('lab16', ['ngCordova'])

.controller('lab16Controller', function($scope, $cordovaGeolocation){

document.addEventListener('deviceready', function(){
            var options = {
                timeout: 10000,
                enablehighAccuracy: false
            };

            $cordovaGeolocation.getCurrentPosition(options)
                .then(function(position){
                    var myLat = position.coords.latitude;
                    var myLong = position.coords.longitude;
                    var myalto = position.coords.altitude;

                    console.log(myLat, myLong);

                    $scope.my_latitude = myLat;
                    $scope.my_longitude = myLong;
                    $scope.my_altitude = myalto;

                });

        }, false);
});