angular.module('controllers', [])
  .controller('homeController', function($scope) {
    $scope.message = "Home Controller :)";
  })
  .controller('aboutController', function($scope) {
    $scope.message = "ABOUT!";
  });
