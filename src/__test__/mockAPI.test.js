const mockAPI = require('../server/mockAPI');

describe('Testing MockAPI functionality', () => {
  it('it should return true', () => {
    const title = 'test json response';
    const message = 'this is a message';
    const time = 'now';
    expect(mockAPI.message).toBe(message);
    expect(mockAPI.title).toBe(title);
    expect(mockAPI.time).toBe(time);
  });
})