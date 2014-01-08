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
			templateUrl: 'app/modules/profile/views/controller_view.html',
			controller: 'profileCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);