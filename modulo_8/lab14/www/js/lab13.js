angular.module('lab14', ['ngCordova'])

.controller('lab14Controller', function($scope, $cordovaCamera){

document.addEventListener("deviceready", function () {
  
  var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
  
      $scope.image = imageURI;
    }, function(err) {
      // error
    });

  }, false);

});