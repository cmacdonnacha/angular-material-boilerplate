angular.module('app.layout', [
  'ui.router',
  'layout.controllers.LayoutCtrl'
])

.config(function config($stateProvider) {
  $stateProvider.state('layout', {
    url: '/layout',
    templateUrl: 'layout/layout.view.html'
  });
});
