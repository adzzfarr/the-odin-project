const capitalize = require('./capitalize');

test('All lowercase', () => 
    expect(capitalize('hello')).toBe('Hello')
); 

test('All uppercase', () => 
    expect(capitalize('HELLO')).toBe('HELLO')   
);