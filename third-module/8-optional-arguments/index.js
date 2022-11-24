function nameAndAge(name, age) {
    if(age === undefined) {
        console.log(`His name is ${name}`);
    } else {
        console.log(`His name is ${name} and have ${age} years old`);
    }
}

console.log(nameAndAge("Eduardo", 21));

console.log(nameAndAge("Eduardo"));