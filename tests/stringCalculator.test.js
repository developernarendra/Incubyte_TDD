// const { add } = require('../src/stringCalculator');

// test('returns 0 for an empty string', () => {
//     expect(add("")).toBe(0);
// });


test('supports different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});