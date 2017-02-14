angular.module('todo.services.ToDo', [])
  .factory('ToDo', function() {

    var toDoItems = [
      {
        title:  'Make a todo list',
        completed: true
      },
      {
        title:  'Check off first item on todo list',
        completed: true
      },
      {
        title:  'Realise you\'ve have already accomplished two things on the list',
        completed: true
      },
      {
        title:  'Reward yourself with a nice long nap',
        completed: false
      }
    ];

    var service = {
      getItems: toDoItems
    };
    return service;

  });
