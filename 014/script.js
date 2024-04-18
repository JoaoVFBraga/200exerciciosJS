// Exercício 14: Escreva um programa que verifica se um ano é bissexto

function verificaBissexto(ano) {
  if ((ano % 4 != 0) || ((ano % 100 == 0) && (ano % 400 != 0))) {
    console.log('Ano normal')
  } else {
    console.log('Ano bissexto')
  }
}
verificaBissexto(2000);
verificaBissexto(2001);