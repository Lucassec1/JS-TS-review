// 1 - void
function withoutReturn(): void {
    console.log("Esta função não tem retorno!")
    // return 18
}

withoutReturn()

// 2 - callback como argumento

function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função!")
    
    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Lucas")
preGreeting(greeting, "Samuel")

// 3 - generic function

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([10, 20, 30]))
console.log(firstElement(["Lucas", "Dayanne", "Iara"]))
// console.log("Hi")

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2 
    }
}

const newObject = mergeObjects({name: "Lucas"}, {age: 30, job: "Cabeleleiro"})

console.log(newObject)

// 4 - constraints

// function biggestNumber<T extends number | string>(a: T, b: T): T {
//     return 0
// }