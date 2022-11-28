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

let bulldog = new Dognelson("Bulldog", 'black');

console.log(bulldog);

bulldog.latir();
