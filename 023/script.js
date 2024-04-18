// Exercício 23: Escreva um programa que verique as cores de um semáforo

function verificaSinal(cor) {
  if(cor == 'verde') {
    console.log('Aberto')
  } else if (cor == 'amarelo') {
    console.log('Atenção')
  } else if (cor == 'vermelho') {
    console.log('Fechado')
  } else {
    console.log('Essa cor não existe no semáforo')
  }
}
verificaSinal('verde');
verificaSinal('azul');