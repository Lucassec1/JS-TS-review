const regex = /\w+@\w+.\w+/;

console.log(regex.test('test@gmail.com'));
console.log(regex.test('github@outlook.com'));
console.log(regex.test('udemy@test.br'));
console.log(regex.test('testing12@test.com.br'));
