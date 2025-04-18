// 1. Capitalize function
function capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // 2. Reverse string function
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 3. Calculator object
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => {
      if (b === 0) throw new Error('Cannot divide by zero');
      return a / b;
    },
    multiply: (a, b) => a * b
  };
  
  // 4. Caesar cipher function
  function caesarCipher(str, shift) {
    return str.split('').map(char => {
      if (/[a-z]/.test(char)) {
        const code = char.charCodeAt(0) - 97;
        return String.fromCharCode(((code + shift + 26) % 26) + 97);
      } else if (/[A-Z]/.test(char)) {
        const code = char.charCodeAt(0) - 65;
        return String.fromCharCode(((code + shift + 26) % 26) + 65);
      }
      return char;
    }).join('');
  }
  
  // 5. Analyze array function
  function analyzeArray(arr) {
    if (arr.length === 0) {
      return {
        average: NaN,
        min: Infinity,
        max: -Infinity,
        length: 0
      };
    }
  
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      average: sum / arr.length,
      min,
      max,
      length: arr.length
    };
  }
  
  module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
  };