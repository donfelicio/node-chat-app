const expect = require('expect');

const {isRealString} = require('./validation')

//import isRealString

describe('isRealString', () => {
  it('Should reject non string values', () => {
    var res = isRealString(234, 234);
    expect(res).toBe(false);
  });

  it('Should reject strings with only spaces', () => {
    var res = isRealString('  ', '  ');
    expect(res).toBe(false);
  });

  it('Should allow strings with non space chars', () => {
    var res = isRealString('Felix', 'Room1');
    expect(res).toBe(true);
  });
});

//should reject non string values
//should reject strings with only spaces
//should allow strings with non space chars
