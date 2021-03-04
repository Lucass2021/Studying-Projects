//TemplateStrings.js

const nome = "Rebeca"

const contatenação = "Ola" + nome + "!" //Normal
const template = `Olá ${nome} !`  //TemplateStrings

console.log(contatenação, template)

//Expressões
console.log(`1 + 1 = ${1 + 1}`) //Só funciona o template

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")} !`) //Arrow function com template