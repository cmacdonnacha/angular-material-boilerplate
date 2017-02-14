angular.module('todo.controllers.ToDoCtrl', [])
  .controller('ToDoCtrl', function(ToDo) {
    var vm = this;
    vm.toDoItems = ToDo.getItems;
  });
