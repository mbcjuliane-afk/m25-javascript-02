/** 
 * Exemplos de uso do switch no JS */

console.log("Menu de opções");
console.log("1 - Cadastro");
console.log("2 - Consulta");
console.log("3 - Alteração");
console.log("4 - Exclusão");
let op = 6; 
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

// Usando o switch para mesma condição de aplicação - lembrar de colocar o break

switch(op) {
    case 1: console.log("Escolheu Cadastro"); break;
    case 2: console.log("Escolheu Consulta"); break;
    case 3: console.log("Escolheu Alteração"); break;
    case 4: console.log("Escolheu Exclusão"); break;
    default: console.log("Escolheu uma opção inválida");
}