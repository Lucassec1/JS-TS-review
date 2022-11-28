function newCat(breed, paws, color) {
    let cat = Object.create({});
    cat.breed = breed;
    cat.paws = paws;
    cat.color = color;
    cat.meow = function() {
        console.log('Meowwwwwwwwwwwwwwwwwwwwwwwwww')
    }

    return cat;
}

let maineCoon = newCat('Maine Coon', 4, 'black and white');

console.log(maineCoon);

maineCoon.meow();