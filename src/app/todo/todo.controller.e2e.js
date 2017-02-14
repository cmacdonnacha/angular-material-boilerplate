describe('test todo page', function () {

  beforeEach(function() {
    browser.get('#/todo');
  });

  it('should ensure the page title is correct', function () {
   expect(browser.getTitle()).toEqual('Angular Material Boilerplate');
  });
});
