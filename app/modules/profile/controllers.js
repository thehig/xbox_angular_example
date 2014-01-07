// app/modules/profile/controllers.js
angular.module('profileApp', [])
.controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.tabs=[];

	
	$scope.addProfile = function(gamertag){
		$scope.gamertag= "";

		$scope.removeTab = function (index) {
   			 $scope.tabs.splice(index, 1);
		};

		$scope.tabs.push({"gamertag": gamertag, "pulling":true, "profile":{} });

		$http.get('https://xboxapi.com/profile/'+gamertag).success(function(xboxAPIData)
		{
			
			tempProfile = _.find($scope.tabs, function(currentTab)
			{
				return currentTab.gamertag == gamertag;
			});


			//TODO: find better way of doing this
			tempProfile.profile = xboxAPIData;
			tempProfile.pulling = false;
		})
		.error(function(data)
		{
			//_.findWhere($scope.tabs, {"gamertag": gamertag}).push("success": false, "message":"The call returned sucessfully", "pulling": false});
		});

		
	}

	$scope.resetForm = function()
	{
		$scope.gamertag = "";
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
