function multiplyThreeNumbers(x, y, z) {
    return x * y * z;
}

console.log(multiplyThreeNumbers(2, 5, 7));

const multiply = multiplyThreeNumbers(3, 9, 11);
console.log("The value of multiplication is " + multiply)

function canDrive (age, CNH) {
    if (age >= 18 && CNH == true) {
        console.log("You can drive");
    } else {
        console.log("You can't drive");
    }
}

console.log(canDrive(19, true));
console.log(canDrive(21, false));
console.log(canDrive(16, 0));
console.log(canDrive(22, 1));
