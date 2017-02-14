angular.module('app.todo', [
  'ui.router',
  'todo.controllers.ToDoCtrl',
  'todo.services.ToDo'
])

.config(function config($stateProvider) {
  $stateProvider.state('todo', {
    url: '/todo',
    templateUrl: 'todo/todo.view.html'
  });
});
