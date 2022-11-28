// create an array with 5 items
let fruits = ['banana', 'strawberry', 'grape', 'melon', 'orange'];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);

// create an array with 2 elements and another with 4
let numbersA = [1, 7];
let numbersB = [8, 9, 11, 23];

console.log(numbersA.length);
console.log(numbersB.length);

// create an object bus
let bus = {
    wheels: 8,
    limPassengers: 40,
    dors: 2
}

console.log(bus.wheels);
console.log(bus.limPassengers);
console.log(bus.dors);

// add the windows property on the bus, with a value of 20
delete bus.wheels;
console.log(bus.wheels);

bus.windows = 20;

console.log(bus);
console.log(bus.windows)

// create an array with 5 names, including your
let names = ['Erick', 'Paula', 'Iara', 'Lucas', 'Samuel'];

if (names.includes('Lucas')) {
    console.log("The name is correct");
}

// create 2 arrays, one with more than 5 elements and another with less
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80];
let arr2 = ['Irelia', 'Evelynn', 'Katarina', 'Akali'];

function verifyValue (value) {
    if(value.length > 5) {
        console.log("So much elements");
    } else if (value.length < 5) {
        console.log("Few elements")
    }
}

verifyValue(arr1);
verifyValue(arr2);

// create an array with 5 elements
let arr3 = ["People1", "People2", "People3", "People4", "Dayanne"];

for(let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// create a json with 3 properties 
let cars2 = {
    "model": "BMW",
    "wheels": 4,
    "doors": 4
}

console.log(cars2.model);
console.log(cars2.wheels);
console.log(cars2.doors);

// create an array from a sentence
let phrase = "create an array from a sentence";

let words = phrase.split(' ');

for(let x = 0; x < words.length; x++) {
    console.log(words[x])
}

// create a object calculator
let calculator = {
    add: function(x, y) {
        return x + y
    },
    subtract: function(x, y){
        return x - y
    }, 
    multiply: function(x, y) {
        return x * y
    },
    divide: function(x, y) {
        return x / y
    } 
}

let calculatorMethods = Object.keys(calculator);

for(let i = 0; i < calculatorMethods.length; i++) {
    let calculate = calculator[calculatorMethods[i]];
    console.log(`${calculatorMethods}: The result is ${calculate(20, 10)}`);
}