var chai = require('chai');
var expect = chai.expect;

require('../../array/last');

describe('last', function() {
  it('should grab the last item from the array', function() {
    var ary = ['t', 'e', 's', 't', 'tests'];

    expect(ary.last).to.eql("tests");
  });
});
