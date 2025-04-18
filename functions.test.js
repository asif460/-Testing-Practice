const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
  } = require('./functions');
  
  // Capitalize function tests
  test('capitalize first character', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
    expect(capitalize('123')).toBe('123');
  });
  
  // Reverse string function tests
  test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
    expect(reverseString('123')).toBe('321');
  });
  
  // Calculator tests
  describe('calculator', () => {
    test('add', () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(-1, 5)).toBe(4);
      expect(calculator.add(0, 0)).toBe(0);
    });
  
    test('subtract', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
      expect(calculator.subtract(10, 20)).toBe(-10);
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  
    test('divide', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(1, 2)).toBe(0.5);
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
  
    test('multiply', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
      expect(calculator.multiply(-2, 5)).toBe(-10);
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });
  
  // Caesar cipher tests
  test('caesar cipher', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('world', 5)).toBe('btwqi');
    expect(caesarCipher('xyz', 3)).toBe('abc'); // Test wrapping
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr'); // Test case preservation
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!'); // Test punctuation
    expect(caesarCipher('Z', 1)).toBe('A'); // Test single character wrap
    expect(caesarCipher('a', -1)).toBe('z'); // Test negative shift
  });
  
  // Analyze array tests
  test('analyze array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
    expect(analyzeArray([10])).toEqual({
      average: 10,
      min: 10,
      max: 10,
      length: 1
    });
    expect(analyzeArray([])).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0
    });
  });