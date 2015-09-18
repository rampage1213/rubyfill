var chai = require('chai');
var expect = chai.expect;

require('../../object/blank');

describe('blank', function() {

  it('should return false if object has items', function() {
    var object = {name: 'quintin', sex: 'male'}

    expect(object.blank).to.eql(false);
  })

  it('should return true if object is empty', function() {
    var object = {}

    expect(object.blank).to.eql(true);
  })

});
