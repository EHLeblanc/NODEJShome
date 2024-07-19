// tests/helloworld.test.js
const helloWorld = require('../src/helloworld');

test('should return "Hello, World!"', () => {
    expect(helloWorld()).toBe('Hello, World!');
});
