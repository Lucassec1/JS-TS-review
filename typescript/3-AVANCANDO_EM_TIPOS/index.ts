// 1 - arrays

let numbers : number[] = [1, 2 , 3, 4]

numbers.push(5)

console.log(numbers[3])

const nomes: string[] = ["Dayanne", "Iara", "Samuel"]

nomes.push("Lucas")

// 2 - outra sintaxe array

const nums: Array<number> = [20, 50]

numbers.push(300)

console.log(nums[2])

// 3 - any

const arr1: any = [ 2, "Alô", true, false, [], {nome: "Dayannelol"}]

arr1.push("Iara")

console.log(arr1)

// 4 - parametros tipados - função

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(12, 17)

// soma(c + d)

// 5 - retorno de função

function greeting (name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Lucas"))

// 6 - função anonima

setTimeout(function() {
    const sallary: number = 9999

    // console.log(parseFloat(sallary))

    // console.log(sallary)
}, 1500)

// 7 -tipos de objeto

function carros(carro: {valorComJuros: number, valorSemJuros: number}) {
    console.log("Valor com juros " + carro.valorComJuros)
    console.log("Valor sem juros " + carro.valorSemJuros)
}

const objCarro = {valorComJuros: 30000, valorSemJuros: 23000}

carros(objCarro)

const nomeObj:{nome: string, surname: string} = {nome: "Lucas", surname: "Siqueira"}

// 8 - props opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }
}

showNumbers(2, 5 , 9)
showNumbers(7, 10)
// showNumbers(15)

// 9 - validando argumento opcional

function newCar(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        console.log(`Carro, ${firstName} ${lastName}, legal`)
    }

    return `Carro, ${firstName}, legal`
}

console.log(newCar("Fiat", "Uno"))
console.log(newCar("Marea"))

// 10 - union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(700)
showBalance("1000")
// showBalance(false)

const array2: Array<number | string | boolean> = [29, "Hi", false]

// 11 - avançando em union types

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuário foi reprovado!"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Back-end"))

// 12 - type alias

type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(10)
showId("500")

// 13 - interfaces

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 17,
    y: 59,
    z: 22
}

showCoords(coordObj)

// 14 - interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const anyPerson: Person = {name: "Lucas", age: 19}

console.log(anyPerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - literal types

let test = "testando isso"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

// showDirection("bottom")

// 16 - non-null assertion operators

const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint

let n: bigint

// n = 12

n = 1700n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - symbol

let symbolAlfa: symbol = Symbol("alfa")

let symbolBeta = Symbol("beta")

console.log(symbolAlfa == symbolBeta)
console.log(symbolAlfa === symbolBeta)