// 1 - Number

var x: number = 2

console.log(x)

x = 14

console.log(typeof x)

const y = 3.14159265359

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - String

const firstName: string = "Lucas"

console.log(firstName.toLocaleUpperCase())

let fullName: string

const lastName: string = "Siqueira"

fullName = firstName + lastName

console.log(typeof fullName)

// 3 - Boolean

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotation

const ann: string = "Isso é legal oh"


// Define o tipo apenas observado o objeto e o tipo não pode ser trocado
let inf = "Isso também é legal oh"

console.log(27)