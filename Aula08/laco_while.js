/** 
 * Exemplo de uso do laço while (enquanto)
 */

let i=0;
while (i<10) {
    //lembrando que o pós-incremento (variavel++) ocorre como última coisa antes de ir para a próxima linha
    //ou seja, imprime o texto com valor de i e aumenta 1
    console.log("Valor de i=" + i++)
}
console.log("Fim do while");

//Usando o While no final, com do...while
do {
    console.log("Valor de i=" + i++);
} while(i<10);
console.log("Fim do laço do..while");
