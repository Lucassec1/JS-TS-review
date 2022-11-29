const day = /\d\d/;

console.log(day.test('2022'));
console.log(day.test('22'));
console.log(day.test('sdasda'));

// console.log(day.test('2022') && "2022".length == 2);
// console.log(day.test('22') && '22'.length == 2);
// console.log(day.test('sdasda'));

const year = /\d\d\d\d/;

console.log(year.test('2022'));
console.log(year.test('22'));
console.log(year.test('sdasda'));

const threeWords = /\w\w\w/;

console.log(threeWords.test('2022'));
console.log(threeWords.test('22'));
console.log(threeWords.test('sdasda'));
console.log(threeWords.test('www'));

