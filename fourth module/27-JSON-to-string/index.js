let people = {
    "name": "Paula",
    "age": 23,
    "profession": "streamer"
}

let jsonToString = JSON.stringify(people);
console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);
