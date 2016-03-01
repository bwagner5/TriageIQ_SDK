var authentication = require('../authentication.js');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("A suite", function() {
  beforeEach( function(){
    spyOn(authentication, "login");
    authentication.login({},{});
  })

  it("spy test", function() {
    expect(authentication.login).toHaveBeenCalled();
  });
});
