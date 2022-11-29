let notAB = /[^ab]/;

console.log(notAB.test('a')); 
console.log(notAB.test('here have A'));

let notAtoZ = /[^a-z]/;

console.log(notAtoZ.test('abc'));
console.log(notAtoZ.test('68455464'));
console.log(notAtoZ.test('here have A'));

let az = /[a-z]/;

console.log(az.test('jdlsajdljsakldhjaskldjlkas'));
console.log(az.test('jdlsajdljsak5555hjaskldjlkas'));

