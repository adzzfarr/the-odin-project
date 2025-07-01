const reverseString = require('./reverse-string');

test('Hello', () =>
    expect(reverseString('Hello')).toBe('olleH')
);

test('Multiple words', () => 
    expect(reverseString('Racecar Is A Palindrome')).toBe('emordnilaP A sI racecaR')
);