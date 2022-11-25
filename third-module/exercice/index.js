// write a function that prints a hello world to the console

function hw() {
    console.log("Hellow World!");
}

hw();

// write a function that receives the age parameter
function age(age) {
    console.log(`You have ${age} years old`);
}

age(19);

// write a function that adds two numbers and returns themwrite a function that adds two numbers and returns them
function sum(x, y) {
    return x + y;
}

console.log(sum(20, 15));
console.log(sum(9, 30));

// write a function that returns a random number
function randomNumber(i) {
    return Math.floor(Math.random() * i) + 1;
}

console.log(randomNumber(17));

// write a function that receives the age of a person
function age1 (age1) {
    if(age1 >= 18) {
        console.log("she can go to driving school")
    } else {
        console.log("she can't go to driving school");
    }
}

console.log(age1(15));
console.log(age1(19));

// write a function that detects the type of data passed
function detectDateType (type) {
    if(typeof type == "string") {
        console.log("The type is string");
    } else if (typeof type == "number") {
        console.log("The type is number");
    } else if (typeof type == "boolean") {
        console.log("The type is boolean");
    }
}

detectDateType("Erick");
detectDateType(27);
detectDateType(true);

// write a function that takes a negative number and returns a positive one
function negativeNumber (w) {
    return w * (-1);
}

console.log(negativeNumber(-10));
console.log(negativeNumber(-2));

function negativeNumber1 (w) {
    return Math.abs(w)
}

console.log(negativeNumber1(-46));
console.log(negativeNumber1(-50));

// write a function that takes a string
function string (letters) {
    if (letters.length > 10) {
        console.log("Too long text")
    } else {
        console.log("Text inside limits")
    }
}

string("maria");
string("let's test if this works");

// write a function that receives two numbers, the first is the base and the second is the potency
function potency(a, b) {
    return Math.pow(a, b);
}

potency(3, 2);
potency(4, 2);
potency(6, 3);

function potency1(a, b) {
    return a ** b;
}

potency1(7, 4);
potency1(9, 3);

// write a function that receives a number, and decrements it by 1 by 1 with a loop
function number (q) {
    for(let i = q; i >= 0 ; i--) {
        if (i % 2 == 0) {
            console.log("The number " + i + " is even");
        }
    }
}

number(20);
number(45);
