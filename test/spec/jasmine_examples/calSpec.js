var add = require('../../lib/jasmine_examples/calcu');

describe("caculation", function() {
  it("should return 0 on empty string", function() {
    expect(add('')).toEqual(0);
  })

  it("should return value to be value", () => {
    expect(add('5')).toEqual(5)
  })

   it("should return total result", () => {
    expect(add('5, 6')).toEqual(11)
  })

});
