// Exercício 10: Escreva um programa que verifica se uma pessoa pode votar com base na idade

const idade = 71;

if (idade < 16) {
  console.log('Não vota')
} else if ((idade >= 18) && (idade <= 70)) {
  console.log('Voto Obrigatório')
} else {
  console.log('Voto Facultativo')
}