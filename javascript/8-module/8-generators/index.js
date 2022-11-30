function* creatorId() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

let createId = creatorId();

console.log(createId.next().value);
console.log(createId.next().value);
console.log(createId.next().value);
console.log(createId.next().value);
console.log(createId.next().value);