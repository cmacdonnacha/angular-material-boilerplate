angular.module('app.about', [
  'ui.router',
  'about.controllers.AboutCtrl'
])

.config(function config($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'about/about.view.html'
  });
});
