const cat = {
    breed: '',
    paws: 4,
    meow: function() {
        console.log('meowwwwwwwwwwwwwwwwww');
    }
}

let maineCoon = Object.create(cat);
maineCoon.meow();

maineCoon.breed('Maine Coon');

console.log(maineCoon.breed);

console.log(cat.breed);

let siamese = Object.create(cat);
siamese.meow();

siamese.breed('Siamese');

console.log(siamese.breed);

console.log(cat.breed)