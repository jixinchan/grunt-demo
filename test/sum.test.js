var add = require('../sum.js');
var expect = require('chai').expect;

describe('加法测试',function(){
  it('"1"+0=0',function(){
    expect(add(0,0)).to.be.equal(0);
  });
  it('3+6=9',function(){
    expect(add(3,6)).to.be.equal(9);
  });
  it('"1"+"3"="4"',function(){
    expect(add("1","3")).to.be.equal(4);
  });
  it('20+"5"=25',function(){
    expect(add(20,5)).to.be.equal(25);
  })
});

