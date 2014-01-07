// app/modules/profile/directives.js
//takes it's scope frop it's nested controller
angular.module('profileApp')
	.directive('myCustomer', [function () {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/profile/views/profile.html'
			
		};
	}])