const people = {
    hands: 2
}

console.log(Object.getPrototypeOf(people));
console.log(Object.getPrototypeOf(people) === Object.prototype);

console.log(people.hasOwnProperty('hands'));

const newPeople = Object.create(people);
console.log(newPeople.hands)

console.log(newPeople.hasOwnProperty('hands'));
console.log(Object.getPrototypeOf(newPeople) === people);
