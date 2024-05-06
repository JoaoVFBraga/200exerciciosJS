// Exercício 36: Usando um laço for, imprima todos os números perfeitos de 1 a 100.

for(let i = 1; i <= 100; i++){
  let divisores = 0;
  for(let j = 1; j < i; j++) {
    if(i % j === 0){
      divisores += j;
    }
  }
  if(divisores === i) {
    console.log(i);
  }
}