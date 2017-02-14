describe('AboutCtrl ', function () {

  var controller;

  beforeEach(module('app.about'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller) {
    controller = $controller('AboutCtrl', {});
  }));

  it('should set the correct about page message', function () {
    expect(controller.message).toBe('And here is where I tell you all about myself.');
  });

});
