/* Variables----------------------------------

Var - Global
Let - Ampla e fechada
Const - Totalmente fechada e específica

*/

var clima = "Quente"
// A variável clima recebe o valor "Quente"
clima = "Frio"
// Reatribuição de valor para a variável
console.log(clima)


// Var e let são similares, ja const é constante ou imútavel
const clima1 = "Quente"
// clima1 = "Frio" (Error message)
console.log(clima1)


/* Scopo VAR-------------------------- */

/* {
    Tudo aqui dentro é um bloco local, tudo fora é global, com exceção de outros blocos{}
} */

// o Var pode sofrer o efeito de Hoisting ou elevação

//o var x = undefined veio aqui 
console.log("Chamar a var", x)

{
    var x = 0 // o x subiu e ficou sem valor pelo hoisting, porém ele existe
}

//Evitando Hoisting
var y = 1
console.log("Chamar a var", y)


/* Scopo let e const -----------------------------*/

/*Diferente do var, let e const tem scopo local, podem ser diferentes mas chamados iguais
 conforme o scopo */

const z = 1;

{
    const z = 0
    console.log(z);
}

console.log(z);


