var chai = require('chai');
var expect = chai.expect;

require('../../array/drop');

describe('drop', function() {
  it('should start at the 2nd index value and then show the last values', function() {
    var ary = ['t', 'e', 's', 't', 's'];

    expect(ary.drop(3)).to.eql(['s', 't', 's']);
  });
});
