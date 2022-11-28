let numberA = 2;
let numberB = 5;
let numberC = 6;
let numberD = 11;

function printNumbers(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

printNumbers(numberA, numberB, numberC, numberD)