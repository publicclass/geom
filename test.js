var geom = require('./index')
  , assert = require('assert');

describe('geom',function(){

  it('mat',function(){
    assert(geom.mat);
  })

  it('vec',function(){
    assert(geom.vec);
  })

  it('poly',function(){
    assert(geom.poly);
  })

})