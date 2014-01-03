// app/modules/profile/directives.js
angular.module('profileApp')
	.directive('myCustomer', [function () {
		return {
			restrict: 'AE',
			template: '{{tab.profile | json}}'
			
		};
	}])