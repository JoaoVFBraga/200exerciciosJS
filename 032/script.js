// Exercício 32: Crie um jogo de "Pedra, papel e tesoura" contra o computador.

const linha1 = document.querySelector('h3');
const form = document.querySelector('.formulario');
let numeroMaquina = '';
let numeroUsuario = '';
let resultado = '';

function transformaNumero(numero) {
  if (numero === 1) {
    return 'Pedra'
  } else if (numero === 2) {
    return 'Papel'
  } else {
    return 'Tesoura'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  numeroMaquina = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
  numeroUsuario = Number(form.inNumero.value);
  console.log(numeroMaquina, numeroUsuario);
  if (((numeroUsuario === 1) && (numeroMaquina === 3)) || ((numeroUsuario === 2) && (numeroMaquina === 1)) || ((numeroUsuario === 3) && (numeroMaquina === 2))) {
    resultado = 1;
  } else if (numeroUsuario === numeroMaquina) {
    resultado = 2;
  } else {
    resultado = 3;
  }
  if(resultado === 1) {
    linha1.innerHTML = `Você ganhou! A máquina escolheu ${transformaNumero(numeroMaquina)}`
  } else if(resultado === 2) {
    linha1.innerHTML = `Empate! A máquina escolheu ${transformaNumero(numeroMaquina)}`
  } else{
    linha1.innerHTML = `Você perdeu! A máquina escolheu ${transformaNumero(numeroMaquina)}`
  }
});