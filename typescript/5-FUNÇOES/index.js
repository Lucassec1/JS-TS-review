"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
    // return 18
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Lucas");
preGreeting(greeting, "Samuel");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([10, 20, 30]));
console.log(firstElement(["Lucas", "Dayanne", "Iara"]));
// console.log("Hi")
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Lucas" }, { age: 30, job: "Cabeleleiro" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
}
