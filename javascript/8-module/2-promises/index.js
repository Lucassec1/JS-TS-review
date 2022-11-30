let promisse = Promise.resolve(6);

console.log('Another codes');

console.log(promisse);

promisse.then((value) => {console.log(`The value is ${value}`)})
        .then((value) => {return value + 5})