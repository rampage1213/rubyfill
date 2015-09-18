var chai = require('chai');
var expect = chai.expect;

require('../../array/first');

describe('first', function() {
  it('should grab the first item from the array', function() {
    expect(["t", "e", "s", "t"].first(1)).to.eql(["t"]);
    expect(["t", "e", "s", "t"].first(2)).to.eql(["t", "e"]);
  });

  it('should grab the first items from the array depending on what number was passed through', function() {
    expect(["t", "e", "s", "t"].first(2)).to.eql(["t", "e"]);
  });
});
