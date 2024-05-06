// Exercício 39: Usando um laço for, crie um programa que calcule o fatorial de um número;

function calculaFatorial(numero) {
  let fatorial = 1;
  for(let i = numero; i > 0; i--) {
    fatorial = fatorial * i;
  }
  console.log(fatorial)
}

calculaFatorial(10);