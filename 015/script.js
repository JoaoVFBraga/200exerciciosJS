// Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo

// function verificaPalindromo(palavra) {
//   const palavraArray = [];
//   const tamanho = palavra.length
//   for(let i = 0; i < tamanho; i++) {
//     palavraArray.push(palavra[i]);
//   }
//   const arrayInversa = palavraArray.reverse().join('');
//   console.log(arrayInversa)
// }
// verificaPalindromo('João')

function verificaPalindromo(palavra) {
  let palavraInvertida = palavra.split("").reverse().join('');
  if (palavra == palavraInvertida) {
    console.log('É um palíndromo')
  } else {
    console.log('Não é um palíndromo')
  }
}
verificaPalindromo('ovo');