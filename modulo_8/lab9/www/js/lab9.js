angular.module('lab9', ['ngCordova'])

.controller('lab9controller', function($scope, $rootScope, $cordovaNetwork) {

  document.addEventListener("deviceready", function () {

    $scope.red = $cordovaNetwork.getNetwork();
    $scope.isOnline = $cordovaNetwork.isOnline();
    $scope.isOffline = $cordovaNetwork.isOffline();

    console.log($scope.red);
    console.log($scope.isOnline);
    console.log($scope.isOffline);


    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
    })

  }, false);
});