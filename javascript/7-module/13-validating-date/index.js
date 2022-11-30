const regex = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(regex.test('22/10/2040'));
console.log(regex.test('18/04/22'));
console.log(regex.test('9/09/2022'));
console.log(regex.test('10-12-1859'));
