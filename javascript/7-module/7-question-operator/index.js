const standard = /pineappl?e/;

console.log(standard.test('pineapple'));
console.log(standard.test('pineappe'));

const standard2 = /\d+\w?/;

console.log(standard2.test('1231145'));
console.log(standard2.test('34454ece'));
console.log(standard2.test('34454ece '));



