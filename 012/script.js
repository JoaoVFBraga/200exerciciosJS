// Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final

function verificaMedia(mediaFinal) {
  if (mediaFinal >= 7) {
    console.log('Aprovado')
  } else if (mediaFinal >= 5) {
    console.log('Em recuperação')
  } else {
    console.log('Reprovado')
  }
}

verificaMedia(7);
verificaMedia(6);
verificaMedia(3);