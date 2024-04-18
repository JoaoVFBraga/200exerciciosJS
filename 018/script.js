// Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade

function podeDirigir(idade) {
  if(idade >= 18) {
    console.log('Pode dirigir')
  } else {
    console.log('Não pode dirigir')
  }
}
podeDirigir(19);
podeDirigir(15);