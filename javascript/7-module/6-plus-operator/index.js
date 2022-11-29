let manyOrFewDigits = /\d+/;

console.log(manyOrFewDigits.test('654'));
console.log(manyOrFewDigits.test(' '));
console.log(manyOrFewDigits.test('464dsdas64654646sdsadsadadssa'));
console.log(manyOrFewDigits.test('aasdassad'));

