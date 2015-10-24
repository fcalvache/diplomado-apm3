angular.module('lab7.controllers', ['lab7.services'])
.controller('lab7Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});