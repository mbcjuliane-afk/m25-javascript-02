/**
 * Conjuntos em JS - aplicação
 * Não podemos usar da forma abaixo: 
 * let nome1 = 'Andre';
 * let nome2 = 'Junior';
 * 
 * let nome50= 'Arthur'
 */

/**
 * Vetor com 4 nomes
 * posições 0   1   2   3   
 */

let nomes = ["Juliane", "Arthur", "Alcione", "Carlos"];
console.log(nomes[2]);

// Listando os nomes usando o laço for (1ª opção)

for (let i=0; i<nomes.length; i++) {
    console.log(nomes[i])
}
console.log("Fim do for (1ª opção)");

//listando os nomes usando o laço for (2ª opção)
for (const it of nomes) {
    console.log(it);
}
console.log("Fim do for (2ª opção)")
console.log("=+" .repeat(20))

//Usando o while para listar os nomes
let i=0
while(i<nomes.length) {
    console.log(nomes[i++]);
}
console.log("Fim do while")