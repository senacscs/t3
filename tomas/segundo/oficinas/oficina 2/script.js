// De5claração da função jogo
function jogo() {
    // Inicializa uma variável para verificar se o jogador passou para a próxima pergunta
    let passou = false;

    // Pergunta ao jogador sobre o tipo de animal que é um felino
    let escolha = prompt("Show do milhão\nPrimeira pergunta\nQual animal é um Felino?\nA - Cadeira de rodas\nB - Oficina do Alberto\nC - Pincher");

    // Verifica a escolha do jogador usando um switch case
    switch (escolha.toUpperCase()) {
        case "A":
            alert("Muito burro da zero pra ele");
            passou = false;
            break;
        case "B":
            alert("Acerto miseravi");
            passou = true; // Define passou como true se o jogador acertar
            break;
        case "C":
            alert("Muito burro da zero pra ele");
            passou = false;
            break;
    }

    // Se o jogador passou para a próxima pergunta
    if (passou) {
        // Pergunta ao jogador sobre um país da Europa
        escolha = prompt("Próxima Pergunta\nQual é um País da Europa\nA - Arábia\nB - Netuno\nC - Coringa");
        switch (escolha.toUpperCase()) {
            case "A":
            case "B":
                alert("Muito burro da zero pra ele");
                passou = false;
                break;
            case "C":
                alert("Acerto miseravi");
                passou = true; // Define passou como true se o jogador acertar
                break;
        }
    }

    // Continua para a próxima pergunta se o jogador passou
    if (passou) {
        // Pergunta ao jogador sobre o número de estados do Brasil
        escolha = prompt("Próxima Pergunta\nQuantos estados tem o Brasil\nA - 78\nB - ∞\nC - 299");
        switch (escolha.toUpperCase()) {
            case "A":
                alert("Muito burro da zero pra ele");
                passou = false;
                break;
            case "B":
                alert("Acerto miseravi");
                passou = true; // Define passou como true se o jogador acertar
                break;
            case "C":
                alert("Muito burro da zero pra ele");
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
                alert("Acerto miseravi");
                passou = true; // Define passou como true se o jogador acertar
                break;
            case "B":
            case "C":
                alert("Muito burro da zero pra ele");
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
