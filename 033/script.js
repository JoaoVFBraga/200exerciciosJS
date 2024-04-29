// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci

let num1 = 0;
let num2 = 1;
let prox = '';
console.log(num1);
console.log(num2);


for(let i = 1; i <= 8; i++) {
  prox = num1 + num2;
  console.log(prox);
  num1 = num2;
  num2 = prox;
}