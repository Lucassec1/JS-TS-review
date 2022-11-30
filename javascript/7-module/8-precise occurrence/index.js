const cep = /\d{5}-\d{3}/;

console.log(cep.test('12345-465'));
console.log(cep.test('125-461'));
console.log(cep.test('1234-65'));
console.log(cep.test('123045-4605'));
console.log(cep.test('dsadsadsa1465146'));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test('(30)99999-5555'))
console.log(tel.test('(30)45499-5555'))



