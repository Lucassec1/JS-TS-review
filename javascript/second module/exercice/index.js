// store values ​​in variables
let peopleName = "Paula";
let number = 16;
let boolean = true;

console.log(typeof peopleName);
console.log(typeof number);
console.log(typeof boolean);

// creates an if structure that verifies the entry in the club, if you are over 18 you can enter
let age = 17;

if (age >= 18 ) {
    console.log("you may come in");
} else {
    console.log("entry not allowed");
}

// create a constant with your name as value
const myName = "Lucas";

if (myName == "Lucas") {
    console.log(`Hi, ${myName}!`);
}

// the Math.pow() function displays the power of a number
const potency = Math.pow(2,2);
console.log(potency);

console.log(Math.pow(3,2));
console.log(Math.pow(18,2));

// store the speed of a car in a variable
let velocity = 90;

if (velocity < 80) {
    console.log("You are under the speed limit");
} else {
    console.log("You are over the speed limit");
}

// make an if/else structure to check if the user can drive
let age2 = 22;
let CNH = true;

if (age2 >= 18 && CNH == false) {
    console.log("Your age is allowed, but you don't have a driver's license");
} else if(age2 >= 18 && CNH == true) {
    console.log("Your age is allowed and you have a CNH, so you can drive");
} else {
    console.log("Your age is not allowed and you do not have a driving license");
}

// write a while loop that displays the numbers from 0 to 10 in the console
let x = 0;

while(x <= 10) {
    console.log(x);
    x++;
}

// writes a for loop that displays the numbers from 100 to 50 in the console
for (let i = 100; i >= 50; i--) {
    console.log(i);
}

// write a for or while loop that prints which number is even and which number is odd
for (let z = 0; z <= 50; z++) {
    if(z % 2 == 0) {
        console.log(`The number ${z} is even`);
    } else {
        console.log(`The number ${z} is odd`);
    }
}

// check if the number is prime
let num = 7;
let divisions = 0;

for(let y = 1; y <= num; y++) {
    if (num % y == 0) {
        divisions ++;
    }
}

if (divisions == 2) {
    console.log(`The number ${num} is prime`);
} else {
    console.log(`The number ${num} is not prime`);
}

    // wrong
    // if (num / num == 1 && num / 1 == num) {
    //     console.log(`The number ${num} is prime`);
    // } else {
    //     console.log(`The number ${num} is not prime`);
    // }