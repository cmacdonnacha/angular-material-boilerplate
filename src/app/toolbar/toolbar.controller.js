angular.module('toolbar.controllers.ToolbarCtrl', [])
  .controller('ToolbarCtrl', function($state, $scope, $mdSidenav) {
    $scope.openSideNav = function () {
      $mdSidenav('left').open();
    };
  });
