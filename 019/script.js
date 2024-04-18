// Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo

function verificaNumero(numero, minimo, maximo) {
   if ((numero >= minimo) && (numero <= maximo)) {
    console.log('O número está dentro das limitações')
   } else {
    console.log('O número não está nas limitações')
   }
}
verificaNumero(9, 2, 10);
verificaNumero(110, 30, 100);