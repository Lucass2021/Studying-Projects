const escola = "Cod3r"

console.log(escola.charAt(4)) // Ache o 4 caractere em "Cod3r"
console.log(escola.charAt(5)) // Não encontrou
console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3)) // Retorna possição do dado
console.log(escola.indexOf("r")) // Retorna possição do dado

console.log(escola.substring(1)) //Remove caracter da string
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat(" !"))
console.log("Escola " + (escola) + (" !")) //Contatenação
console.log(escola.replace(3, "e"))

console.log("Ana,Maria,Pedro".split(",")) //Cria arrays separando strings
