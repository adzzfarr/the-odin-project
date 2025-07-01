const caesarCipher = require('./caesar.js');

test('Wrapping', () => 
    expect(caesarCipher('xyz', 3)).toBe('abc')
);

test('Case Preservation', () => 
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
);

test('Punctuation', () => 
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
);

