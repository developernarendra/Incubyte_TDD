// const { add } = require('../src/stringCalculator');

// test('returns 0 for an empty string', () => {
//     expect(add("")).toBe(0);
// });

function add(numbers) {
    if (numbers === "") return 0;

    const numberArray = numbers.split(',');
    const sum = numberArray.reduce((acc, curr) => acc + parseInt(curr), 0);
    return sum;
}
