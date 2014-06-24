angular.module('ObjdatasService', []).factory('Objdatas', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			return $http.get('/objdatas')
			.success(function(data) {
				$scope.objects = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		},

		// // call to POST and create a new nerd
		// create : function(nerdData) {
		// 	return $http.post('/api/nerds', nerdData);
		// },

		// // call to DELETE a nerd
		// delete : function(id) {
		// 	return $http.delete('/api/nerds/' + id);
		// }
	}		

}]);