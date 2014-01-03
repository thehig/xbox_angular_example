// app/modules/profile/directives.js
//takes it's scope frop it's nested controller
angular.module('profileApp')
	.directive('myCustomer', [function () {
		return {
			restrict: 'AE',
			template: '{{tab.profile | json}}'
			
		};
	}])