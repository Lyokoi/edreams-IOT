angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/objdatas', {
			templateUrl: 'views/objdatas.html',
			controller: 'ObjdatasController'	
		});

	$locationProvider.html5Mode(true);

}]);