/* Praticando e Avançando ------------------ */

// Declarando variável ------------------
var name

//Atribuindo valor 
name = "Lucas"

console.log(name);
console.log(typeof name);

// Agrupando declarações--------------------

let age, isHuman

age = 30
isHuman = true

/* Ou

let age = 20
let isHuman = true

*/

console.log(name, age, isHuman)

// Substituir com variáveis console.log("O Lucas tem 20 anos")

console.log("O", name, "tem", age, "anos")
//Ou
console.log("O " + name + " tem " + age + " anos")

// Revisão Objeto ------------------

const person = {
    name: "John",
    age: 85,
    weight: 88.6,
    isAdmin: true,
}

// One value only
console.log(person.name);

// O John tem 30 anos
console.log("O", person.name, "tem", person.age, "anos")
//or
console.log(`O ${person.name} tem ${person.age} anos`)

// Revisao Array--------------------------------

const animals = [
    "Lion",
    "Tiger",
    "Dragon",
]

console.log(animals)
console.log(animals[0])
console.log(animals.length)

//Exercicios -------------------------

//1)
let weight = 80

//2)
console.log(typeof weight)

//3)

let github = {
    name: "Lucas",
    age: 19,
    stars: 4.5,
    isSubscribed: true,
}
console.log(github)

//4)
// let student = {}; é um objeto 

//4.1)
let student = {
    name: "Lucas",
    age: 19,
    stars: 4.5,
    weight: 80,
    isSubscribed: true,
}

//4.2)

console.log("O", name,)