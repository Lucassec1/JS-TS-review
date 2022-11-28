function Dognelson(breed, paws, color) {
    this.breed = breed;
    this.paws = paws;
    this.color = color;
}

Dognelson.prototype.bark = function() {
    console.log('Au au au');
}

let bulldog = new Dognelson("Bulldog", 4, 'black');

bulldog.bark();