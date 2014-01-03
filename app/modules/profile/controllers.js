// app/modules/profile/controllers.js
angular.module('profileApp', [])
.controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.tabs=[];

	
	$scope.addProfile = function(name){
		$scope.name= "";



		$scope.tabs.push({"name": name, "pulling":true, "profile":{} });

		$http.get('https://xboxapi.com/profile/'+name).success(function(data) 
		{
			
			tempProfile = _.find($scope.tabs, function(data)
			{
				return data.name == name; 
			});


			//TODO: find better way of doing this
			tempProfile.profile = data;
			tempProfile.pulling = false;
		})
		.error(function(data)
		{
			//_.findWhere($scope.tabs, {"name": name}).push("success": false, "message":"The call returned sucessfully", "pulling": false});	
		});

		
	}

	$scope.resetForm = function()
	{
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
