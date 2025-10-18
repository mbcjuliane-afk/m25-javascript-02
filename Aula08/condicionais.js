/**
 * Exemplos de uso de condicionais 
 */
let idade = 17;
// Usando if (se)
if (idade>= 18) {
    console.log("Você pode dirigir!");
} else if (idade=>16) {
    console.log("Você está quase na idade para dirigir, aguarde mais um pouco!");

} else {
    console.log("Você não pode dirigir, pois é menor de idade!");
}

/**
 * Operadores relacionais
 * > maior que
 * < menor que
 * == igual a
 * != diferente
 * >= maior ou igual
 * <= menor ou igual
 * 
 * Operador relacional texto - Tabela ACSII (American Standard Code for Information Interchange)
 * 
 * Operadores lógicos 
 * && operador AND => idade >= 18 && idade <= 60
 *                 => verdadeiro para idades entre 18 e 60 (base portas lógicas e tabela verdade)
 * 
 * || operador OR => idade < 18 || idade > 60
 *                => verdadeiro para idades menores de 18 ou maiores de 60
 * 
 * | operador NOT => ! (idade >= 18 && idade <= 60) - algebra boleana
 *                => Nesse caso, seria equivalente a: verdadeiro para idades menores de 18 ou maiores de 60
 */

/** 
 * Exemplos de uso do switch no JS */

console.log("Menu de opções");
console.log("1 - Cadastro");
console.log("2 - Consulta");
console.log("3 - Alteração");
console.log("4 - Exclusão");
let op = 2; 

if (op==1) {
    console.log("Escolheu Cadastro!");
} else if (op == 2) {
    console.log("Escolheu Consulta");
} else if (op == 3) {
    console.log("Escolheu Alteração");
} else if (op == 4) {
    console.log("Escolheu Exclusão");
} else {
    console.log("Escolheu uma opção inválida");
}

// Usando o switch para mesma condição de aplicação
switch(op) {
    case 1: console.log("Escolheu Cadastro");
    case 2: console.log("Escolheu Consulta");
    case 3: console.log("Escolheu Alteração");
    case 4: console.log("Escolheu Exclusão");
    default: console.log("Escolheu uma opção inválida");
}