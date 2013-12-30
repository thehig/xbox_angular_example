// app/modules/profile/controllers.js
angular.module('profileApp', [])
.controller('profileCtrl', ['$scope', function ($scope) {
	
	$scope.tabs=[];

	$scope.addProfile = function(name){
		$scope.tabs.push({"name": name});
		$scope.name = "";//$setPristine();
	}
}]);
	