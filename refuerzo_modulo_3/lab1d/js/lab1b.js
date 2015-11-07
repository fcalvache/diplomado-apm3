angular.module('lab1b', [])
   .controller('lab1bController',function($scope){
   	$scope.angular_filters = ['filter', 'currency', 'number', 'date', 'json', 'lowercase', 'uppercase', 'limitTo', 'orderBy'];
   	$scope.angular_input = ['nput[text]', 'input[date]', 'input[datetime-local]', 'input[time]', 'input[week]', 'input[month]', 'input[number]', 'input[url]', 'input[email]', 'input[radio]',	 'input[checkbox]']; 
   });
