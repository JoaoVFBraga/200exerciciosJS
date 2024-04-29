// Exercício 31: Usando um laço while, crie um programa que advinhe um número entre 1 e 100, que o usuário pensou, através do método de busca binária

let min = 1;
let max = 100;
let chute = Math.floor((max + min) / 2);
let numeroPensado = 50;

while(chute !== numeroPensado){
  if(chute > numeroPensado){
    max = chute;
  } else {
    min = chute;
  }
  chute = Math.floor((max + min) / 2);
}

console.log(`O número pensado é: ${chute}`);