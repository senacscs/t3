function saudacao() {
    var agora = new Date();
    var hora = agora.getHours();

    var saudacao;

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    alert(saudacao);
}

// Chame a função quando a página for carregada
saudacao();