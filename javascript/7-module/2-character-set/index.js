const regex = /[1234567]/;

console.log(regex.test('Have the number 8'));
console.log(regex.test('Have the number 5'));
console.log(regex.test('Have the number 23'));
console.log(regex.test('Have the number 46'));

const regex2 = /[0-9]/;

console.log(regex2.test('Have the number 10'));
console.log(regex2.test('Have the number 464564546546464235'));
