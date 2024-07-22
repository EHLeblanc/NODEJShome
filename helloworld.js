console.log("Hello, Eli");
module.exports = {
    coverageThreshold: {
      './src/*.js': {
        lines: 80,
      },
    },
  };
  const helloWorld = require('../src/helloworld');

  test('adds 1 + 2 to equal 3', () => {
    expect(helloWorld.sum(1, 2)).toBe(3);
  });
  
  // Add more tests as necessary for your functions
    
