var chai = require('chai');
var expect = chai.expect;

require('../../array/first');

describe('first', function() {
  it('should grab the first item from the array', function() {
    var ary = ["t", "e", "s", "t"];

    expect(ary.first).to.eql("t");
  });
});
