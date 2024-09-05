// const { add } = require('../src/stringCalculator');

// test('returns 0 for an empty string', () => {
//     expect(add("")).toBe(0);
// });


// test('supports different delimiters', () => {
//     expect(add("//;\n1;2")).toBe(3);
// });

test('throws an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});
