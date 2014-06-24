angular.module('MyApp')
  .controller('AddCtrl', ['$scope', '$alert', '$http','liveService', function($scope, $alert, $http, liveService) {

        $scope.formData = {};

        // when landing on the page, get all todos and show them
        $http.get('/api/records')
        .success(function(data) {
            $scope.records = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

        // when submitting the add form, send the text to the node API
        $scope.createRecord = function() {
            $http.post('/api/records', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.records = data;
                console.log(data);
                $alert({
                    content: 'Record has been added.',
                    placement: 'top-right',
                    type: 'success',
                    duration: 3
                });
//                liveService.changeData(data);
                    liveService.confirmData($scope.records);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };



        // delete a record after checking it
        $scope.deleteRecord = function(id) {
            $http.delete('/api/redords/' + id)
            .success(function(data) {
                $scope.records = data;
                $alert({
                    content: 'Record has been deleted.',
                    placement: 'top-right',
                    type: 'success',
                    duration: 3
                });
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };
  }]);