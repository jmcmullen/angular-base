angular.module('routes', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../views/home.html',
        controller: 'homeController'
      })
      .when('/about', {
        templateUrl: '../../views/about.html',
        controller: 'aboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
