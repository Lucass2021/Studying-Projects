// Functions

/*

//Declaração da função------------------
function createPhrases() {
    console.log("Estudar Projetos");
    console.log("Estudar revisão");
    console.log("Estudar Dev ED");
}
//Running function
createPhrases();

*/

//Function expression/anonymous-------------------

// const soma = {} ou []

//Parametros
const sum = function (number1, number2) {
    let total = number1 + number2
    return total
}
// Argumentos
sum(2, 3);
sum(4, 5);

// Quando o return é usado ao invés de console.log(), a function para e finaliza


let number1 = 34
let number2 = 25

console.log(`a soma é ${sum(number1, number2)}`)


//Explicação Simples-----------------
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco("banana", "maça")

console.log(copo)

// Na função você dá um dado, a função usa esse dado e devolve em um recipiente

//Scopo função------------------

let subject = "createVideo"

function createThink(subject) {
    subject = "study"
    return subject
}

console.log(subject) // Pega primeiro valor
console.log(createThink(subject)) // pega novo valor

//Arron function----------------

const sayNo = function () { }
//or
const sayYes = () => {
    console.log("Lucas")
}

sayYes()

//Callback--------------- Revisar
// Callback é uma função dentro de outra função

function sayMyName(name) {
    console.log(name)
}
sayMyName(
    () => {
        console.log("Powerful")
    }
)


