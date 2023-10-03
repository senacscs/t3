function numeroDigitado() {
    document.getElementById("mostrar").innerHTML =
      "O número digitado foi " + numero.value;
  }
  
  //Nome digitado
  function nomeDigitado() {
    document.getElementById("mostrar").innerHTML = "Olá " + nome.value;
  }
  
  //Operação simples
  function calcular() {
    var primNum = document.getElementById("primeiroNum").value;
    var segmNum = document.getElementById("segundoNum").value;
    const sel = document.getElementById("select").value; //aksjf
  
    if (sel == "opcao1") {
      const resultado = parseFloat(primNum) + parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao2") {
      const resultado = parseFloat(primNum) - parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao3") {
      const resultado = parseFloat(primNum) / parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao4") {
      const resultado = parseFloat(primNum) * parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    }
  }
  
  //Prioridades
  function prioridades() {
    let resultado;
  
    resultado = 5.0 + 4.0 * 2.0;
    document.getElementById("mostrar").innerHTML +=
      "Operação: 5 + 4 * 2 = " + resultado + "<br>";
  
    resultado = (5.0 + 4.0) * 2.0;
    document.getElementById("mostrar").innerHTML +=
      "Operação: (5 + 4) * 2 = " + resultado + "<br>";
  
    resultado = 1.0 + (2.0 / 3.0) * 4.0;
    document.getElementById("mostrar").innerHTML +=
      "Operação: 1 + 2 / 3 * 4 = " + resultado + "<br>";
  
    resultado = (1.0 + 2.0) / (3.0 * 4.0);
    document.getElementById("mostrar").innerHTML +=
      "Operação: (1 + 2) / (3 * 4) = " + resultado + "<br>";
  }
  
  //Divisão inteira
  function div() {
    var valor = document.getElementById("valor").value;
    var metade_inteira = valor / 2;
    var resto = valor % 3;
    document.getElementById("mostrar").innerHTML =
      "metade inteira: " + metade_inteira + "<br>" + "resto: " + resto;
  }
  
  //Potência e raiz
  function pot() {
    var numero = document.getElementById("num").value;
    const potencia = Math.pow(numero, 3.0);
    const raiz = Math.sqrt(numero);
    document.getElementById("mostrar").innerHTML =
      "O número ao cubo é: " +
      potencia +
      "<br>" +
      "A raiz quadrada do número é: " +
      raiz +
      "<br>";
  }

  //Troca de variáveis
function troca() {
    var a = document.getElementById("primeiraVar").value;
    var b = document.getElementById("segundaVar").value;
  
    var aux = a;
    var aTroca = b;
    var bTroca = aux;
  
    document.getElementById("mostrar").innerHTML =
      "Variáveis antes da troca: " +
      "A = " +
      a +
      " B = " + //aksjf
      b +
      "<br>" +
      "Variáveis após a troca: " +
      "A = " +
      aTroca +
      " B = " +
      bTroca;
  }
  
  //Maioridade penal
  function maioridade() {
    const maioridade = 18;
    var idade = document.getElementById("idade").value;
  
    if (idade < maioridade) {
      var tempo = maioridade - idade;
      document.getElementById("mostrar").innerHTML =
        "Faltam " + tempo + " ano(s) para você atingir a maioridade";
    } else {
      document.getElementById("mostrar").innerHTML =
        "Você já atingiu a maioridade";
    }
  }
  
  //Altura média
  function altura() {
    var altura1 = parseFloat(document.getElementById("primeiraAltura").value);
    var altura2 = parseFloat(document.getElementById("segundaAltura").value);
    var altura3 = parseFloat(document.getElementById("terceiraAltura").value);
    //kajhs
    media_altura = (altura1 + altura2 + altura3) / 3;
  
    document.getElementById("mostrar").innerHTML =
      "Média das alturas é: " + Math.round(media_altura) + " metros";
  }