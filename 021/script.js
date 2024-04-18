// Exercício 21: Escreva um programa que determine a estação do ano com base no mês

function determinaEstacao(mes) {
  if((mes < 3) || (mes == 12)) {
    console.log('Verão')
  } else if(mes < 7) {
    console.log('Outono')
  } else if(mes < 9) {
    console.log('Inverno')
  } else {
    console.log('Primavera')
  }
}