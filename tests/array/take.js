var chai = require('chai');
var expect = chai.expect;

require('../../array/take');

describe('take', function() {
  it('should take the first 3 from the array', function() {
    var ary = ['t', 'e', 's', 't', 's'];

    expect(ary.take(3)).to.eql(['t', 'e', 's']);
  });
});
