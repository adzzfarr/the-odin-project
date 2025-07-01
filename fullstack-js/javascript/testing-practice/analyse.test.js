const analyseArray = require('./analyse');

test('Average', () => 
    expect(analyseArray([2, 4, 6, 8, 10]).average).toBe(6)
);

test('Minimum', () => 
    expect(analyseArray([10, 9, 8, 7, 6, 50]).min).toBe(6)
);

test('Minimum', () => 
    expect(analyseArray([10, 9, 8, 7, 6, 50]).max).toBe(50)
);

test('Length', () => 
    expect(analyseArray([1, 1, 1, 1]).length).toBe(4)
);

test('Empty array average', () => 
    expect(analyseArray([]).average).toBe(null)
);

test('Empty array minimum', () => 
    expect(analyseArray([]).min).toBe(null)
);

test('Empty array maximum', () => 
    expect(analyseArray([]).max).toBe(null)
);

test('Empty array length', () => 
    expect(analyseArray([]).length).toBe(0)
);
