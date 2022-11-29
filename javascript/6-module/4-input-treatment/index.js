function checkNumber(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        console.log('Please, enter only numbers into the program');
    } else {
        return number;
    }
}

checkNumber(23);
checkNumber('99');
checkNumber('khfkjdfkjsn');

let number = prompt('Enter a number');

checkNumber(number);