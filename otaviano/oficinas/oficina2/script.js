function jogo() {
    let passou = false;

    let escolha = prompt("Show do milhão\nPrimeira pergunta\nQual animal é um Felino?\nA - Cachorro\nB - Gato\nC - Peixe");

    switch (escolha.toUpperCase()) {
        case "A":
            alert("Errouuu");
            passou = false;
            break;
        case "B":
            alert("Acertou");
            passou = true;
            break;
        case "C":
            alert("Errouuu");
            passou = false;
            break;
    }

    if (passou) {
        escolha = prompt("Próxima Pergunta\nQual é um País da Europa\nA - China\nB - Estados Unidos\nC - França");
        switch (escolha.toUpperCase()) {
            case "A":
                alert("Errouuu");
                passou = false;
                break;
            case "B":
                alert("Errouuu");
                passou = false;
                break;
            case "C":
                alert("Certa resposta");
                passou = true;
                break;
        }
    }

    if (passou) {
        escolha = prompt("Próxima Pergunta\nQuantos estados tem o Brasil\nA - 23\nB - 26\nC - 27");
        switch (escolha.toUpperCase()) {
            case "A":
                alert("Errouuu");
                passou = false;
                break;
            case "B":
                alert("Certa Resposta");
                passou = true;
                break;
            case "C":
                alert("Errouuu");
                passou = false;
                break;
        }
    }

    if (passou) {
        escolha = prompt("Próxima Pergunta\nQuem descobriu o Brasil\nA - Pedro Alvares Cabral\nB - Napoleão\nC - Cristovão Colombo");
        switch (escolha.toUpperCase()) {
            case "A":
                alert("Certa Resposta");
                passou = true;
                break;
            case "B":
            case "C":
                alert("Errouuu");
                passou = false;
                break;
        }
    }

    if (passou) {
        alert("Parabéns Você Ganhou 1 milhão de reais!!!");
    }
}

// Chame a função jogo para iniciar o jogo
jogo();
