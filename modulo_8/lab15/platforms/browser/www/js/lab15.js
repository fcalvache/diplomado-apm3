angular.module('lab15', ['ngCordova'])
  .controller('lab15Controller', function($scope, $cordovaCamera, $cordovaDialogs){
  document.addEventListener("deviceready", function () {
    $scope.base64 = function(){
          var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.image = "data:image/jpeg;base64," + imageData;
        }, function(err) {
          console.log('algo salio mal');
        });
      };

    $scope.filelocation = function(){
      var options = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
        };

        $cordovaCamera.getPicture(options).then(function(imageURI) {
      
          $scope.image = imageURI;
          $cordovaDialogs.alert(imageURI, 'Hola!', 'Aceptar')

        }, function(err) {
          // error
        });
    };
      }, false);
    });

  
  