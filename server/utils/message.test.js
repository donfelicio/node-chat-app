const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = 'Felix';
    var text = 'Welcome to course';
    var res = generateMessage(from, text);

    // expect(res.from).toBe(from);
    // expect(res.text).toBe(text);
    //or use
    expect(res).toMatchObject({from, text});
    expect(typeof res.createdAt).toBe('number');
  });
});
