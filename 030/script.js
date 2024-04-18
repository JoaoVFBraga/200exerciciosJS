// Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100

for(let i = 1; i <= 100; i++){
  let divisores = [];
  for(let i2 = 1; i2 <= i; i2++){
    if (i % i2 == 0) {
      divisores.push(i2)
    }
  }
  if(divisores.length == 2) {
    console.log(i)
  }
  divisores = [];
}