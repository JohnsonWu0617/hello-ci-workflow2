var assert= require("assert")
describe('Array',function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is notpresent', function(){
      assert.equal(1, [1,2,3].indexOf(0));
    })
  })
})