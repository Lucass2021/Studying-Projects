
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
    weight: 74.8,
    isSubscribed: true,
}
console.log(github)

//4)
//let student = {}; é um objeto

//4.1)


//4.2)

console.log("O", name, "de", age, "anos pesa", weight)

//4.3)

let newStudant = {
    name: "Pedro",
    age: 15,
    weight: 74.5,
}

let studant = [
    github,
    newStudant
]


console.log(studant);
console.log(studant[0]);
console.log(studant[1])