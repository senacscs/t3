function nota() {
    var alunos = []
    var notas = []
    var media = []
    var conceito = []

    for (var lin = 0;lin <= 2; lin++) {
        alunos[lin] = prompt(`Insira o nome do ${lin+1}º aluno:`)
        notas[lin] = []
        var soma = 0
        for (var col = 0; col <= 2;  col++) {
            notas[lin][col] = Number(prompt(`Insira a ${col+1}º nota do ${alunos[lin]}, ${lin+1}º aluno:`))
            soma += notas[lin][col]
        }
        media[lin] = soma / 3
        if (media[lin] >= 6) {
            conceito[lin] = "Aprovado"
        } else {
            conceito[lin] = "Reprovado"
        }
       

    }

    console.table(notas);
    console.log(notas)

    for(var lin = 0; lin <= 2; lin++) {
        alert(`O ${lin+1}º aluno, ${alunos[lin]}, obteve a média: ${(media[lin]).toFixed(2)}, sendo ${conceito[lin]}.`)
        console.log(`O ${lin+1}º aluno, ${alunos[lin]}, obteve a média: ${(media[lin]).toFixed(2)}, sendo ${conceito[lin]}.`)
    }
}