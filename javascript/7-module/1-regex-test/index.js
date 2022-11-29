const regex = new RegExp('testing');
console.log(regex.test('Have testing'));
console.log(regex.test('Do not have'));

const regex2 = /test/;
console.log(regex2.test('Have test'));
console.log(regex2.test('Do not have'));

let text = 'testing with regex';
console.log(regex.test(text));

console.log(/circle/.test('Have a circle here?'));
console.log(/circle/.test('dsadsadsadsacircledsdasdsa'));