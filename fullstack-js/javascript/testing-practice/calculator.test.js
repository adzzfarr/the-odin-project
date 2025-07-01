const calculator = require('./calculator');

test('Addition', () => 
    expect(calculator.add(1, 2)).toBe(3)
);

test('Subtraction', () => 
    expect(calculator.subtract(5, 3)).toBe(2)
);

test('Multiplication', () => 
    expect(calculator.multiply(2, 3)).toBe(6)
);

test('Division', () => 
    expect(calculator.divide(16, 4)).toBe(4)
);