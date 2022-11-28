"use strict";
// 1 - Number
var x = 2;
console.log(x);
x = 14;
console.log(typeof x);
const y = 3.14159265359;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - String
const firstName = "Lucas";
console.log(firstName.toLocaleUpperCase());
let fullName;
const lastName = "Siqueira";
fullName = firstName + lastName;
console.log(typeof fullName);
// 3 - Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
const ann = "Isso é legal oh";
// Define o tipo apenas observado o objeto e o tipo não pode ser trocado
let inf = "Isso também é legal oh";
console.log(27);
