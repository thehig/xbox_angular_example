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
			templateUrl: 'app/modules/profile/views/index.html',
			controller: 'profileCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);