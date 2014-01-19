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
			templateUrl: 'app/modules/profile/views/controllers_view_2.html',
			controller: 'profileCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);