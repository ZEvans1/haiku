var Haiku = require('./../js/haiku.js').haikuModule;

describe('Haiku', function () {

  it('should test if all three lines are not null', function() {
    var testHaiku = new Haiku("a","b","c")
    expect(testHaiku.line1).toEqual("a")
    expect(testHaiku.line2).toEqual("b")
    expect(testHaiku.line3).toEqual("c")
  });
});
