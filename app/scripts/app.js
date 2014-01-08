angular.module('mainApp', [
	'ngRoute',
	'ui.bootstrap',
	'profileApp'
	])
.config(['$routeProvider',
	function($routeProvider) 
	{
		$routeProvider.
		when('/', {
			templateUrl: 'app/modules/profile/views/controller.html',
			controller: 'profileCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);