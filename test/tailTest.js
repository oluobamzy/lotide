const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail",()=>{
  it("['Hello'] should return undefined",()=>{
    assert.strictEqual(tail(['Hello']),undefined);
  });
  it("['Hello','Lighthouse','Labs'] should return ['lighthouse','Labs']",()=>{
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']),['Lighthouse','Labs']);
  });
});


