class Mammal {
  constructor(paws) {
    this.paws = paws;
  }  
}

let coyote = new Mammal(4);

console.log(coyote.paws);

class Dognelson extends Mammal {
    constructor(paws, breed) {
       super(paws, paws);
       this.breed = breed;
    }
    bark() {
        console.log("Au au au")
    }
}

let bulldog = new Dognelson(4, 'bulldog');

console.log(bulldog.paws);

bulldog.bark();