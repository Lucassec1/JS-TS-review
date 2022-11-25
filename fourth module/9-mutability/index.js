let numberA = {
    number: 27
}

let numberB = numberA;
console.log(numberA == numberB);

let numberC = {
    number: 27
}

console.log(numberA == numberC);
console.log(numberB == numberC);

numberB.number = 15;
console.log(numberA);

numberA.number = 39;
console.log(numberB);
