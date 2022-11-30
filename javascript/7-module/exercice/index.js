// create a regex that only accepts uppercase letters
const uppercase = /[A-Z]/;

console.log(uppercase.test('dsadsadsa'));
console.log(uppercase.test('ADSADadsa'));
console.log(uppercase.test('ABCDE'));
console.log(uppercase.test('ASADAS1232'));

// create a regex that only accepts strings ending with ID
const endingID = /\d+[ID]/;

console.log(endingID.test('132132'));
console.log(endingID.test('4545id'));
console.log(endingID.test('4545ID'));
console.log(endingID.test('dsdasID'));
console.log(endingID.test('ID'));

// create a regex that only accepts the next expression "Brand: nameOfBrand"
const brand = /Brand: (Nike|Adidas|Puma|Asics)/;

console.log(brand.test('Brand: Nike'));
console.log(brand.test('Brand: Nike1'));
console.log(brand.test('Brand: Nikeee'));
console.log(brand.test('Brand: sdasda'));

// create a regex that validates ip addresses
const addressIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(addressIP.test('127.0.0.1'));
console.log(addressIP.test('8.8.8.8'));
console.log(addressIP.test('192.168.0.62'));
console.log(addressIP.test('192.14.4'));
console.log(addressIP.test('192478'));

// create a regex that validates name of users in system
const username = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(username.test('sasa 123'));
console.log(username.test('12-sdsadas'));
console.log(username.test('sa'));
console.log(username.test('dsa45aa10qea4dsad'));
