// app/modules/profile/directives.js
//takes it's scope frop it's nested controller
angular.module('profileApp')
	.directive('gamerProfile', [function () {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/profile/views/profile.html',
			scope:{
                gamertag:"=",
                pulling:"="
            }
		};
	}])

angular.module('profileApp')
    .directive('playerView', [function () {
        return {
            restrict: 'E',
            templateUrl: 'app/modules/profile/views/player.html'
        };
    }])

angular.module('profileApp')
    .directive('gameView', [function () {
        return {
            restrict: 'E',
            templateUrl: 'app/modules/profile/views/game.html'
        };
    }])