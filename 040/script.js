// Exercício 40: Usando um laço while, crie um programa que inverta uma string.

function inverteString(string) {
  let i = string.length - 1;
  const stringInvertida = [];
  while(i >= 0) {
    stringInvertida.push(string[i]);
    i--;
  }
  console.log(stringInvertida.join(''))
}

inverteString('menino')