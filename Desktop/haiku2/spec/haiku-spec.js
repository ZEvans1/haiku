import { Haiku } from './../js/haiku.js';

describe('Haiku', function () {

  it('should test if all three lines are not null', function() {
    let testHaiku = new Haiku("a","b","c")
    expect(testHaiku.line1).toEqual("a")
    expect(testHaiku.line2).toEqual("b")
    expect(testHaiku.line3).toEqual("c")
  });

  it('should make an array of words from a string', function() {
    let testHaiku = new Haiku("Good day my friend", "Hello my friend", "Hi")
    expect(testHaiku.collectWords()[0].length).toEqual(4)
    expect(testHaiku.collectWords()[1].length).toEqual(3)
    expect(testHaiku.collectWords()[2].length).toEqual(1)
  });
});
