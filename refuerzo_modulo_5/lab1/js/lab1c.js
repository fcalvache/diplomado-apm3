angular.module('lab1c', [])
   .controller('lab1cController', ['$scope', function($scope){
        $scope.link_image = 'http://dummyimage.com/200x200/000/34ffddaa';
        $scope.changeLinkImage = function(_images){
            $scope.link_image = _images;
        };
   }]);
