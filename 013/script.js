// Exercício 13: Escreva um programa que calcula o IMC de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa;

function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  if(imc < 18.5) {
    console.log('Abaixo do peso')
  } else if ((imc >= 18.5) && (imc < 25)) {
    console.log('Peso normal')
  } else if ((imc >= 25) && (imc < 30)){
    console.log('Sobrepeso')
  } else {
    console.log('Obesidade')
  }
}

calculaIMC(80, 1.80);
calculaIMC(120, 1.80);
calculaIMC(55, 1.80);