// Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado.

function verificarAluno(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    if(media >= 7) {
        console.log(`O aluno foi aprovado com a média ${media}`)
    } else {
        console.log(`O aluno foi reprovado com a média ${media}`)
    }
}
verificarAluno(3, 6);