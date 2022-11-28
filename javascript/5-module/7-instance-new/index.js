function newCat(breed, paws, color) {
    let cat = Object.create({});
    this.breed = breed;
    this.paws = paws;
    this.color = color;
    this.meow = function() {
        console.log('Meowwwwwwwwwwwwwwwwwwwwwwwwww')
    }
}

let maineCoon = new newCat('Maine Coon', 4, 'black and white');

maineCoon.meow();