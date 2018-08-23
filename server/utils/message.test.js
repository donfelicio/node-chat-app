const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Felix';
    var latitude = 2;
    var longitude = 3;
    var res = generateLocationMessage(from, latitude, longitude);
    expect(res.from).toBe(from);
    expect(res.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
  });
});
