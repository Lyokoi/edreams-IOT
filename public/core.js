
angular.module('iotApplication', ['ngRoute'])



.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
      	$routeProvider

			// home page
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'mainController'
			})

			.when('/crud', {
				templateUrl: 'views/crud.html',
				controller: 'CrudController'
			})

			.when('/dashboard', {
				templateUrl: 'views/dashboard.html',
				controller: 'DashController'	
			});

			

		$locationProvider.html5Mode(true);
        
    }])

	.controller('mainController', ['$route', '$routeParams', '$location',
      function($route, $routeParams, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
    }])
    .controller('DashController', ['$routeParams', function($routeParams) {
      this.name = "DashboardController";
      this.params = $routeParams;
    }])
    
    .controller('CrudController', 	['$scope', '$http',
	  	function($scope, $http) {
	    
		    $scope.formData = {};

			// when landing on the page, get all todos and show them
			$http.get('/api/objectdatas')
				.success(function(data) {
					$scope.objectdatas = data;
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});

			// when submitting the add form, send the text to the node API
			$scope.createObject = function() {
				$http.post('/api/objectdatas', $scope.formData)
					.success(function(data) {
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.objectdatas = data;
						console.log(data);
					})
					.error(function(data) {
						console.log('Error: ' + data);
					});
			};

			// delete a data after checking it
			$scope.deleteObject = function(id) {
				$http.delete('/api/objectdatas/' + id)
					.success(function(data) {
						$scope.objectdatas = data;
					})
					.error(function(data) {
						console.log('Error: ' + data);
					});
			};
		}
	]);

