// De5claração da função jogo
function jogo() {
    // Inicializa uma variável para verificar se o jogador passou para a próxima pergunta
    let passou = false;

    // Pergunta ao jogador sobre o tipo de animal que é um felino
    let escolha = prompt("Show do milhão\nPrimeira pergunta\nQual animal é um Felino?\nA - Cachorro\nB - Gato\nC - Peixe");

    // Verifica a escolha do jogador usando um switch case
    switch (escolha.toUpperCase()) {
        case "A":
            alert("Errouuu");
            passou = false;
            break;
        case "B":
            alert("Acertou");
            passou = true; // Define passou como true se o jogador acertar
            break;
        case "C":
            alert("Errouuu");
            passou = false;
            break;
    }

    // Se o jogador passou para a próxima pergunta
    if (passou) {
        // Pergunta ao jogador sobre um país da Europa
        escolha = prompt("Próxima Pergunta\nQual é um País da Europa\nA - China\nB - Estados Unidos\nC - França");
        switch (escolha.toUpperCase()) {
            case "A":
            case "B":
                alert("Errouuu");
                passou = false;
                break;
            case "C":
                alert("Certa resposta");
                passou = true; // Define passou como true se o jogador acertar
                break;
        }
    }

    // Continua para a próxima pergunta se o jogador passou
    if (passou) {
        // Pergunta ao jogador sobre o número de estados do Brasil
        escolha = prompt("Próxima Pergunta\nQuantos estados tem o Brasil\nA - 23\nB - 26\nC - 27");
        switch (escolha.toUpperCase()) {
            case "A":
                alert("Errouuu");
                passou = false;
                break;
            case "B":
                alert("Certa Resposta");
                passou = true; // Define passou como true se o jogador acertar
                break;
            case "C":
                alert("Errouuu");
                passou = false;
                break;
        }
    }

    // Continua para a próxima pergunta se o jogador passou
    if (passou) {
        // Pergunta ao jogador sobre quem descobriu o Brasil
        escolha = prompt("Próxima Pergunta\nQuem descobriu o Brasil\nA - Pedro Alvares Cabral\nB - Napoleão\nC - Cristovão Colombo");
        switch (escolha.toUpperCase()) {
            case "A":
                alert("Certa Resposta");
                passou = true; // Define passou como true se o jogador acertar
                break;
            case "B":
            case "C":
                alert("Errouuu");
                passou = false;
                break;
        }
    }

    // Se o jogador passou por todas as perguntas, exibe uma mensagem de parabéns
    if (passou) {
        alert("Parabéns Você Ganhou 1 milhão de reais!!!");
    }
}

// Chame a função jogo para iniciar o jogo
jogo();
