const people = {
    hands: 2
}

console.log(Object.getPrototypeOf(people));
console.log(Object.getPrototypeOf(people) === Object.prototype);

console.log(people.hasOwnProperty('hands'));