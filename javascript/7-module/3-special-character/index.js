const dotRegex = /./;

console.log(dotRegex.test('test'));
console.log(dotRegex.test(12312451));
console.log(dotRegex.test(' '));
console.log(dotRegex.test('32134124dsadsadsa'));
// accepts all 

const dRegex = /\d/; // [0-9]

console.log(dRegex.test('test'));
console.log(dRegex.test(12312451));
console.log(dRegex.test(' '));
console.log(dRegex.test('32134124dsadsadsa'));
// accepts expressions that have just numbers or contain numbers

const dRegex2 = /\D/; // [^0-9]

console.log(dRegex2.test('test'));
console.log(dRegex2.test(12312451));
console.log(dRegex2.test(' '));
console.log(dRegex2.test('324dsadsadsa'));
// accepts expressions that don't have just numbers

const sRegex = /\s/; 

console.log(sRegex.test('test'));
console.log(sRegex.test(12312451));
console.log(sRegex.test(' '));
console.log(sRegex.test('32134124dsadsadsa'));
// accepts expressions that have empty spaces, breaking lines and tabs

const sRegex2 = /\S/; 

console.log(sRegex2.test('test'));
console.log(sRegex2.test(12312451));
console.log(sRegex2.test(' '));
console.log(sRegex2.test('32134124dsadsadsa'));
// accepts expressions that don't have empty spaces, breaking lines and tabs

const wRegex = /\w/; 

console.log(wRegex.test('test'));
console.log(wRegex.test(12312451));
console.log(wRegex.test(' '));
console.log(wRegex.test('32134124dsadsadsa'));
// accepts expressions that have just numbers or string and contain number, string or both

const wRegex2 = /\W/; 

console.log(wRegex2.test('test'));
console.log(wRegex2.test(12312451));
console.log(wRegex2.test(' '));
console.log(wRegex2.test('32134124dsadsadsa'));
// accepts expressions that don't have just numbers or string and contain number, string or both