// Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno

function classificacao(nota) {
  if(nota >= 90) {
    console.log('Nota A')
  } else if(nota >= 80) {
    console.log('Nota B')
  } else if(nota >= 70) {
    console.log('Nota C')
  } else if(nota >= 60) {
    console.log('Nota D')
  } else {
    console.log('Nota E')
  }
}
classificacao(78);
