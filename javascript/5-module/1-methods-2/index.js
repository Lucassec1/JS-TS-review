const cat = {
    breed: '',
    meow: function() {
        console.log("meowwwwwwwwwwwwwwwwwwwwwwwwwwww")
    },
    eat: function() {
        console.log("I'm hungry")
    },
    setBreed: function(newBreed) {
        this.breed = newBreed;
    },
    getBreed: function() {
        return "The breed is " + this.breed;
    }
}

cat.eat();
cat.meow();

cat.setBreed('Maine Coon');
console.log(cat.breed);

console.log(cat.getBreed())