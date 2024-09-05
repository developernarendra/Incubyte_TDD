// stringCalculator.js

// function add(numbers) {
//     return 0;
// }

// module.exports = { add };

test('returns the number when there is one number', () => {
    expect(add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});

