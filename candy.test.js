// File: candy.test.js

const Candy = require('./candy');

describe('Candy', () => {
  it('remembers name', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });
});
