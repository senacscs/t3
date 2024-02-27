function saudar() {
    var data = new Date();
    var hora = data.getHours();
    var saudacao;
  
    if (hora < 12) {
      saudacao = "Bom dia! Seja bem vindo a minha webpage.";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde! Seja bem vindo a minha webpage.";
    } else {
      saudacao = "Boa noite! Seja bem vindo a minha webpage.";
    }
  
    document.getElementById("saudacao").innerHTML = saudacao;
  }