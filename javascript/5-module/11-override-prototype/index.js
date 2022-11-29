class Dognelson {
    constructor (breed, color) {
        this.breed = breed;       
        this.color = color;
    }
    bark() {
        console.log("Au au au")
    }
    get getColor() {
        return this.color;
    }
    set setColor(changeColor) {
        this.color = changeColor;
    }
}

let shepherd = new Dognelson('German Shepherd', 'without color');

console.log(shepherd);

shepherd.setColor = 'brown';

console.log(shepherd.getColor);