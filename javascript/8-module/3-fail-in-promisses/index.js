let promisse = Promise.resolve(new Error('DID NOT WORK'));

console.log('hi');

promisse.then((value) => console.log(value))
        .catch(reason => console.log('Fail ' + reason));
