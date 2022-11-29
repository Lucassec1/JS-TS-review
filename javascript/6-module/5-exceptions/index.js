function salutation(name) {
    if(typeof name != 'string') {
        throw new Error('The name parameter must be a string');
    } else {
        console.log(`Hi ${name}.`);
    }
}

salutation("Lucas");
salutation(5);

console.log('Hi console');