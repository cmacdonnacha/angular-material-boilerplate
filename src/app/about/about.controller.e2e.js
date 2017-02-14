describe('test about page', function () {

  beforeEach(function() {
    browser.get('#/about');
  });

  it('should ensure the page title is correct', function () {
    expect(browser.getTitle()).toEqual('Angular Material Boilerplate');
  });
});
