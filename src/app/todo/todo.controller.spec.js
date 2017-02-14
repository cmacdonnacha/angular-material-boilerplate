describe('ToDoCtrl ', function () {

  var controller;

  beforeEach(module('app.todo'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller) {
    controller = $controller('ToDoCtrl', {});
  }));

  it('should set the correct about page message', function () {
    expect(controller.toDoItems.length).toBeGreaterThan(0);
  });

});
