let car = {
    doors: 2,
    model: "BMW",
}

let car2 = {
    engine: 2.0
}

console.log(car)

Object.assign(car, car2);

console.log(car);