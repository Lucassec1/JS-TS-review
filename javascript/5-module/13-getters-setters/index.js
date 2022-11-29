class Dognelson {
    constructor (breed, color) {
        this.breed = breed;       
        this.color = color;
    }

    bark() {
        console.log("Au au au")
    }
}

Dognelson.prototype.paws = 4;
Dognelson.prototype.breed = 'Not Defined';

let bulldog = new Dognelson("Bulldog", 'black');

console.log(bulldog);

bulldog.bark();

console.log(Dognelson.prototype.breed);
console.log(bulldog.breed);
