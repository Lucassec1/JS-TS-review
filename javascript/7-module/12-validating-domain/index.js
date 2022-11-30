const regex = /[?www.]\w+.com|.com.br/;

console.log(regex.test('www.google.com'));
console.log(regex.test('www.udemy.com'));
console.log(regex.test('udemy.com'));
console.log(regex.test('www.test.com.br'));
