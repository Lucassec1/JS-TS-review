function verifyNumber(num) {
    return new Promise((resolve, reject) => {
        if (num == 5) {
            resolve(console.log(`The number is ${num}`));
        } else {
            reject(new Error('Failed'));
        }
    });
}

verifyNumber(3);
verifyNumber(9);
