// 1 - type guard

function sum(a: number | string, b: number | string) {

    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Não da para fazer isso não oh!")
    }
}

sum("27", "73")
sum(26.2, 173.8)
sum(8, "19")

// 2 - checando se valor existe

function operations(arr: number[], operation?: string | undefined) {
    if(operation) {
        if(operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if(operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log("Por favor, faça as coisas direito.")
    }
}

operations([9, 33, 83])
operations([9, 33, 83], "sum")
operations([9, 33, 83], "multiply")

// 3 - instance of

class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const iara = new User("Iara")
const samuel = new SuperUser("Samuel")

console.log(samuel)
console.log(iara)

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(samuel)
userGreeting(iara)

// 4 - operador in

class Dog {
    name 
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if (breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Regina")
const bob = new Dog("Rodolfo", "Pastor Alemão")

function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)   
    } else {
        console.log("O cachorro é o melhor.")
    }
}

showDogDetails(turca)
showDogDetails(bob)