// app/modules/profile/controllers.js
angular.module('profileApp', [])
.controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.tabs=[];

	$scope.addProfile = function(name){
	
		$http.get('https://xboxapi.com/profile/'+name).success(function(data) 
		{
			console.log(name)
			$scope.pushProfile({"name": name, "profile":data, "success": true, "message":"The call returned sucessfully"});
		})
		.failure(function(data)
		{
			$scope.pushProfile({"name": name, "success": false, "message":"The call didn't return sucessfully"});		
		});

		$scope.name = "";
	}

	$scope.pushProfile = function(profile)
	{	
		$scope.tabs.push(profile);
	}

	$scope.getTabs = function()
	{
		return $scope.tabs;
	}
}]);
