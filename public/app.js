angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/records/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
    .factory('liveService', ['$rootScope', function ($rootScope) {

        var CHANGE_DATA = "changeData";
        var changeData = function (filterData) {

            $rootScope.$broadcast(CHANGE_DATA, {
                filterData: filterData
            });
        };

        var onChangeData = function ($scope, handler) {
            $scope.$on(CHANGE_DATA, function (event, message) {
                handler(message);
            });
        };

        var CONFIRM_DATA = "confirmData";
        var confirmData = function (name) {

            $rootScope.$broadcast(CONFIRM_DATA, {
                confirmedData: name
            });
        };

        var onConfirmData = function ($scope, handler) {
            $scope.$on(CONFIRM_DATA, function (event, message) {
                handler(message);
            });
        };

        return {
            changeData: changeData,
            onChangeData: onChangeData,
            confirmData: confirmData,
            onConfirmData: onConfirmData
        };
    }]);

