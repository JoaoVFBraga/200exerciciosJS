// Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero;

function verificaNumero(numero) {
    if(numero > 0) {
        console.log('O número é positivo')
    } else if(numero < 0) {
        console.log('O número é negativo')
    } else {
        console.log('O número é 0')
    }
    
}
verificaNumero(10);