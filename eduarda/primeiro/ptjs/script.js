//O código tem alguns comentários
//perdidos para os oleguinhas não copiarem

//Olá Gente!
function olaGente() {
    document.getElementById("mostrar").innerHTML = "Olá Gente!";
    console.log(`Olá Gente!`);
    alert(`Olá Gente!`);
  }
  
  //Letra digitada
  function letraDigitada() {
    document.getElementById("mostrar").innerHTML =
      "O letra digitada foi " + letra.value;
  }
  
  //Animal digitado
  function animalDigitado() {
    document.getElementById("mostrar").innerHTML = "Olá " + animal.value;
  }
  
  
  //Altura média
  function altura() {
    var altura1 = parseFloat(document.getElementById("primeiraAltura").value);
    var altura2 = parseFloat(document.getElementById("segundaAltura").value);
    var altura3 = parseFloat(document.getElementById("terceiraAltura").value);
    // var altura4 = parseFloat(document.getElementById("quartaraAltura").value);
    //kajhs
    media_altura = (altura1 + altura2 + altura3 + altura4)   / 3;
  
    document.getElementById("mostrar").innerHTML =
      "Média das alturas é: " + Math.round(media_altura) + " metros";
  }
  
  
  //Número inteiro
  function inteiro() {
    var num = document.getElementById("numInteiro").value;
  
    if (num == 0) {
      document.getElementById("mostrar").innerHTML = "O número é igual a zero";
    } else if (num < 0) {
      document.getElementById("mostrar").innerHTML = "O número é abaixo de zero";
    } else {
      document.getElementById("mostrar").innerHTML = "O número é acima de zero";
    }
  }
  
  //Escolha-caso
  function escolha() {
    let opcoes;
    opcoes = prompt(
      "1) Elogio \n2) Ofensa \n3) Sair \n\nEscolha uma opção (1, 2 ou 3)"
    );
    switch (opcoes) {
      case "1":
        alert("Voce é inteligente!");
        break;
      case "2":
        alert("Voce não presta!");
        break;
      case "3":
        alert("Vai embora!");
        break;
      default:
        alert("Opção Inválida !");
    }
  }
  
  //Contagem regressiva
  function contagem() {
    let contador = 100;
  
    function loop() {
      document.getElementById("mostrar").innerHTML = ("Detonação em: ", contador);
  
      contador = contador - 1;
  
      if (contador > 0) {
        setTimeout(loop, 1000);
      } else {
        document.getElementById("mostrar").innerHTML = "Booom!\n";
      }
    }
  
    loop();
  }
  
  //Consistência
  function consistencia() {
    let idade;
  
    do {
      idade = prompt("Informe sua idade (valores aceitos de 10 a 200): ");
      idade = parseFloat(idade);
    } while (isNaN(idade) || idade < 10 || idade > 200);
  
    alert("\nCorreto!\n");

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
      "Você já atingiu a maioridade, pode ser preso ;)";
  }
}
  }
  
  //Loja de ferramentas
  function loja() {
  const preco_parafuso = 3.7;
  const preco_pregos = 5.0;
  const preco_porca = 2.5;

  var nome = document.getElementById("nomeDigitado").value;
  var parafusos = parseFloat(document.getElementById("parafusos").value);
  var pregoss = parseFloat(document.getElementById("pregos").value);
  var porcas = parseFloat(document.getElementById("porcas").value);

  var total_parafusos = preco_parafuso * parafusos;
  var total_pregos = preco_pregos * pregoss;
  var total_porcas = preco_porca * porcas;

  var total = total_parafusos + total_pregos + total_porcas;

  document.getElementById("mostrar").innerHTML =
    "Cliente: " +
    nome +
    "<br>" +
    "===============================" +
    "<br>" +
    "Parafusos: " +
    parafusos +
    "<br>" +
    "Pregos: " +
    arruelas +
    "<br>" +
    "Porcas: " +
    porcas +
    "<br>" +
    "===============================" +
    "<br>" +
    "Total a pagar: R$" +
    total;
}

//Tipo de triângulo
function triangulo() {
  var lado_1 = document.getElementById("primeiroTr").value;
  var lado_2 = document.getElementById("segundoTr").value;
  var lado_3 = document.getElementById("terceiroTr").value;

  if (lado_a == lado_b && lado_a == lado_c) {
    document.getElementById("mostrar").innerHTML =
      "Este triângulo é Equilátero";
  } else if (lado_1 == lado_2 || lado_2 == lado_3 || lado_3 == lado_1) {
    document.getElementById("mostrar").innerHTML = "Este triângulo é Isósceles";
  } else {
    document.getElementById("mostrar").innerHTML = "Este triângulo é Escaleno";
  }
}

//Eleição
function eleicao() {
  let candidato_1 = 0,
    candidato_2 = 0;
  let brancos = 0,
    nulos = 0,
    total_votos = 0;
  let porcentagem_candidato_1, porcentagem_candidato_2;
  let porcentagem_brancos, porcentagem_nulos;
  let voto;

  do {
    voto = parseFloat(
      prompt(
        "Escolha seu candidato ou tecle zero para encerrar\n\n  1 -> Candidato 1\n  2 -> Candidato 2\n  3 -> Branco\n\nQualquer número diferente de 0, 1, 2 e 3 anulará o seu voto\nDigite seu voto: "
      )
    );
    switch (voto) {
      case 0:
        alert("Votação encerrada!\n");
        break;
      case 1:
        candidato_1 = candidato_1 + 1;
        break;
      case 2:
        candidato_2 = candidato_2 + 1;
        break;
      case 3:
        brancos = brancos + 1;
        break; //kasj
      default:
        nulos = nulos + 1;
    }
  } while (voto != 0);

  total_votos = candidato_1 + candidato_2 + brancos + nulos;
  if (total_votos > 0) {
    porcentagem_candidato_1 = (candidato_1 * 100.0) / total_votos;
    porcentagem_candidato_2 = (candidato_2 * 100.0) / total_votos;
    porcentagem_brancos = (brancos * 100.0) / total_votos;
    porcentagem_nulos = (nulos * 100.0) / total_votos;
  }
  alert(
    "Total de votos: " +
      total_votos +
      "\n\nCandidato 1: " +
      candidato_a +
      " voto(s). " + //lala
      porcentagem_candidato_a +
      " % do total\nCandidato 2: " +
      candidato_b +
      " voto(s). " +
      porcentagem_candidato_b +
      " % do total\nBrancos: " +
      brancos +
      " voto(s). " +
      porcentagem_brancos +
      " % do total\nNulos: " +
      nulos +
      " voto(s). " +
      porcentagem_nulos +
      " % do total\n"
  );
}

//Pesquisa vetor
function posicao() {
  let vetor = [2, 5, 8, 10, 11];
  let achou = false;
  var numero = parseInt(document.getElementById("procurar").value);

  for (let posicao = 0; posicao < 5; posicao++) {
    if (vetor[posicao] == numero) {
      document.getElementById("mostrar").innerHTML =
        "Encontrou na posição: " + posicao;
      achou = true;
    }
  }

  if (achou == false) {
    document.getElementById("mostrar").innerHTML = "O número não está no vetor";
  }
} //haj

//Tabela de dados
function tabela() {
  let nome = ["Angelo", "Thais", "Melissa", "Carlos", "Carla"];
  let altura = [1.65, 1.45, 1.87, 1.83, 1.61];

  document.getElementById("mostrar").innerHTML = "";

  for (let posicao = 0; posicao < 5; posicao++) {
    document.getElementById("mostrar").innerHTML +=
      nome[posicao] + "\t\t" + altura[posicao] + "<br>";
  }
}