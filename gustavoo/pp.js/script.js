//Olá Mundo! m
function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Bem vindo!";
    console.log(`Bem vindo!`);
    alert(`Bem vindo!`);
  }
  
  //Numero digitado m
  function numeroDigitado() {
    document.getElementById("mostrar").innerHTML =
      "O número digitado foi " + numero.value *5;
  }
  
  //Nome digitado m
  function nomeDigitado() {
    document.getElementById("mostrar").innerHTML = "Seja bem vindo " + nome.value;
  }
  
  //Operação simples m
  function calcular() {
    var primNum = document.getElementById("primeiroNum").value;
    var segmNum = document.getElementById("segundoNum").value;
    var termNum = document.getElementById("terceiroNum").value;
    const sel = document.getElementById("select").value; 
  
    if (sel == "opcao1") {
      const resultado = parseFloat(primNum) + parseFloat(segmNum) + parseFloat(termNum) ;
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao2") {
      const resultado = parseFloat(primNum) - parseFloat(segmNum) - parseFloat(termNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao3") {
      const resultado = parseFloat(primNum) / parseFloat(segmNum) / parseFloat(termNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao4") {
      const resultado = parseFloat(primNum) * parseFloat(segmNum) * parseFloat(segmNum);
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
    alert("teste");
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
    alert("teste");
    var a = document.getElementById("primeiraVar").value;
    var b = document.getElementById("segundaVar").value;
  
    var aux = a;
    var aTroca = b;
    var bTroca = aux;
  
    document.getElementById("mostrar").innerHTML =
      "Variáveis antes da troca: " +
      "A = " +
      a +
      " B = " + 
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
    
    media_altura = (altura1 + altura2 + altura3) / 3;
  
    document.getElementById("mostrar").innerHTML =
      "Média das alturas é: " + Math.round(media_altura) + " metros";
  }
  
  //Loja de ferramentas
  function loja() {
    const preco_parafuso = 1.5;
    const preco_arruelas = 2.0;
    const preco_porca = 2.5;
  
    var nome = document.getElementById("nomeDigitado").value;
    var parafusos = parseFloat(document.getElementById("parafusos").value);
    var arruelas = parseFloat(document.getElementById("arruelas").value);
    var porcas = parseFloat(document.getElementById("porcas").value);
  
    var total_parafusos = preco_parafuso * parafusos;
    var total_arruelas = preco_arruelas * arruelas;
    var total_porcas = preco_porca * porcas;
  
    var total = total_parafusos + total_arruelas + total_porcas;
  
    document.getElementById("mostrar").innerHTML =
      "Cliente: " +
      nome +
      "<br>" +
      "===============================" +
      "<br>" +
      "Parafusos: " +
      parafusos +
      "<br>" +
      "Arruelas: " +
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
  
  //Quantos dias
  function dias() {
    var anoAtual = document.getElementById("ano").value;
    var qtd_anos_bi = anoAtual / 4;
    var dias = (anoAtual - 1) * 365 + qtd_anos_bi;
    document.getElementById("mostrar").innerHTML =
      "Já se passaram " + dias + " dias desde 01/01/0001";
  }
  
  //Vogal
  function vogal() {
    var letra = document.getElementById("letra").value;
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u" ||
      letra == "A" ||
      letra == "E" ||
      letra == "I" ||
      letra == "O" ||
      letra == "U"
    ) {
      document.getElementById("mostrar").innerHTML =
        "A letra " + letra + " é uma vogal";
    } else {
      document.getElementById("mostrar").innerHTML =
        "A letra " + letra + " é uma consoante";
    }
  }
  
  //Média
  function media() {
    var m1 = parseFloat(document.getElementById("primeiraMedia").value);
    var m2 = parseFloat(document.getElementById("segundaMedia").value);
    var m3 = parseFloat(document.getElementById("terceiraMedia").value);
  
    var media = (m1 + m2 + m3) / 3;
  
    if (m1 < media) {
      document.getElementById("mostrar").innerHTML =
        "A média final é: " +
        Math.round(media) +
        "<br>" +
        "A média 1 é menor que a média final";
    } else if (m2 < media) {
      document.getElementById("mostrar").innerHTML =
        "A média final é: " +
        Math.round(media) +
        "<br>" +
        "A média 2 é menor que a média final";
    } else if (m3 < media) {
      document.getElementById("mostrar").innerHTML =
        "A média final é: " +
        Math.round(media) + 
        "<br>" +
        "A média 3 é menor que a média final";
    }
  }
  
  //Idade m
  function idade() {
    var idade = document.getElementById("idadeUser").value;
    if (idade < 15) {
      document.getElementById("mostrar").innerHTML = "Você é menor de idade";
    } else {
      
      document.getElementById("mostrar").innerHTML = "Você é maior de idade";
    }
  }
  
  //Múltiplo de cinco m 
  function multiplo() {
    var numero = document.getElementById("number").value;
    if (numero % 10 == 0) {
      document.getElementById("mostrar").innerHTML =
        "O número " + numero + " é múltiplo de 10";
    } else {
      document.getElementById("mostrar").innerHTML =
        "O número " + numero + " não é múltiplo de 10";
    }
  }
  
  //Números iguais
  function num() {
    var num_digitado = document.getElementById("numIgual").value;
    var num_sorteado = Math.floor(Math.random() * 7);
  
    if (num_digitado >= 0 && num_digitado <= 6) {
      if (num_digitado == num_sorteado) {
        document.getElementById("mostrar").innerHTML = "Os números são iguais!";
      } else {
        document.getElementById("mostrar").innerHTML =
          "Os números são diferentes!" +
          "<br>" +
          "Número digitado: " +
          num_digitado +
          "<br>" +
          "Número sorteado: " +
          num_sorteado;
      }
    } else {
      document.getElementById("mostrar").innerHTML =
        "O número digitado deve estar entre 0 e 6";
    }
  }
  
  //Média final
  function mediaFinal() {
    var nome = document.getElementById("nm").value;
    var nota1 = parseFloat(document.getElementById("primeiraNota").value);
    var nota2 = parseFloat(document.getElementById("segundaNota").value);
    var nota3 = parseFloat(document.getElementById("terceiraNota").value);
  
    var media = (nota1 + nota2 + nota3) / 3;
  
    if (media >= 6) {
      document.getElementById("mostrar").innerHTML =
        "Parabéns " +
        nome +
        ", você foi aprovado com a média " +
        Math.round(media);
    } else {
      document.getElementById("mostrar").innerHTML =
        "Que pena " +
        nome +
        ", você foi reprovado com a média " +
        Math.round(media);
    }
  }
  
  //Número inteiro
  function inteiro() {
    var num = document.getElementById("numInteiro").value;
  
    if (num == 0) {
      document.getElementById("mostrar").innerHTML = "O número é igual a zero";
    } else if (num < 0) {
      document.getElementById("mostrar").innerHTML = "O número é negativo";
    } else {
      document.getElementById("mostrar").innerHTML = "O número é positivo";
    }
  }
  
  //Tipo de triângulo
  function triangulo() {
    var lado_a = document.getElementById("primeiroTr").value;
    var lado_b = document.getElementById("segundoTr").value;
    var lado_c = document.getElementById("terceiroTr").value;
  
    if (lado_a == lado_b && lado_a == lado_c) {
      document.getElementById("mostrar").innerHTML =
        "Este triângulo é Equilátero";
    } else if (lado_a == lado_b || lado_b == lado_c || lado_c == lado_a) {
      document.getElementById("mostrar").innerHTML = "Este triângulo é Isósceles";
    } else {
      document.getElementById("mostrar").innerHTML = "Este triângulo é Escaleno";
    }
  }
  
  //Escolha-caso m
  function escolha() {
    let opcoes;
    opcoes = prompt(
      "1) Elogio \n2) Ofensa \n3) Sair \n\nEscolha uma opção (1, 2 ou 3)"
    );
    switch (opcoes) {
      case "1":
        alert("Voce é lindo(a)!");
        break;
      case "2":
        alert("Voce é feio!");
        break;
      case "3":
        alert("Tchau!");
        break;
      default:
        alert("Opção Inválida !");
    }
  }
  
  //Contagem regressiva m
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
  
  //Tabuada
  function tabuada() {
    let numero, resultado, contador; 
  
    numero = document.getElementById("numTab").value;
  
    document.getElementById("mostrar").innerHTML = "";
  
    for (contador = 1; contador <= 10; contador++) {
      resultado = numero * contador;
      document.getElementById("mostrar").innerHTML +=//oeri
        numero + " X " + contador + " = " + resultado + "<br>";
    }
  }
  
  //Consistência m
  function consistencia() {
    let idade;
  
    do {
      idade = prompt("Informe sua idade (valores aceitos de 10 a 150): ");
      idade = parseFloat(idade);
    } while (isNaN(idade) || idade < 10 || idade > 150);
  
    alert("\nCorreto!\n");
  }
  
  //Média dez números m
  function mediaVin() {
    let contador = 1;
    let numero,
      media,
      soma = 0.0;
  
    while (contador <= 20) {
      numero = parseFloat(prompt("Digite o " + contador + "º número: "));
  
      soma = soma + numero;
      contador = contador + 1;
    }
    
    media = soma / 20;
    alert("A média dos números é: " + media);
  }
  
  //Soma de um a x
  function somaX() {
    let soma = 0,
      numero,
      contador;
  
    numero = parseInt(prompt("Digite o número até o qual deseja somar: "));
  
    for (contador = 0; contador <= numero; contador++) {
      soma = soma + contador;
    }
    alert("A soma de 1 até " + numero + " é: " + soma);
  }
  
  //Fatorial m
  function fatorial() {
    let numero,
      atual = 4,
      fatorial = 4;
  
    numero = parseInt(prompt("Digite um número: "));
  
    while (atual <= numero) {
      fatorial = fatorial * atual; 
      atual = atual + 4;
    }
    alert("O fatorial de " + numero + " é " + fatorial);
  }
  
  //Eleição m
  function eleicao() {
    let candidato_bolsonaro = 0,
      candidato_lula = 0;
    let brancos = 0,
      nulos = 0,
      total_votos = 0;
    let porcentagem_candidato_bolsonaro, porcentagem_candidato_lula;
    let porcentagem_brancos, porcentagem_nulos;
    let voto;
  
    do {
      voto = parseFloat(
        prompt(
          "Escolha seu candidato ou tecle zero para encerrar\n\n  1 -> Candidato bolsonaro\n  2 -> Candidato lula\n  3 -> Branco\n\nQualquer número diferente de 0, 1, 2 e 3 anulará o seu voto\nDigite seu voto: "
        )
      );
      switch (voto) {
        case 0:
          alert("Votação encerrada!\n");
          break;
        case 1:
          candidato_a = candidato_bolsonaro + 1;
          break;
        case 2:
          candidato_b = candidato_lula + 1;
          break;
        case 3:
          brancos = brancos + 1;
          break; 
        default:
          nulos = nulos + 1;
      }
    } while (voto != 0);
  
    total_votos = candidato_bolsonaro + candidato_lula + brancos + nulos;
  
    if (total_votos > 0) {
      porcentagem_candidato_bolsonaro = (candidato_bolsonaro * 100.0) / total_votos;
      porcentagem_candidato_lula = (candidato_lula * 100.0) / total_votos;
      porcentagem_brancos = (brancos * 100.0) / total_votos;
      porcentagem_nulos = (nulos * 100.0) / total_votos;
    }
  
    alert(
      "Total de votos: " +
        total_votos +
        "\n\nCandidato bolsonaro: " +
        candidato_bolsonaro +
        " voto(s). " + 
        porcentagem_candidato_bolsonaro +
        " % do total\nCandidato lula: " +
        candidato_lula +
        " voto(s). " +
        porcentagem_candidato_lula +
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
  
  //Preenche e exibe vetor m
  function vetor() {
    let vetor = new Array(20);
  
    for (let posicao = 0; posicao < 20; posicao++) {
      vetor[posicao] = Math.floor(Math.random() * 200) + 2;
    }
  
    document.getElementById("mostrar").innerHTML = "Vetor na ordem original: ";
  
    for (let posicao = 0; posicao < 20; posicao++) {
      document.getElementById("mostrar").innerHTML += vetor[posicao] + " ";
    }
    
    document.getElementById("mostrar").innerHTML +=
      "<br>Vetor na ordem inversa: ";
  
    for (let posicao = 20; posicao >= 0; posicao--) {
      document.getElementById("mostrar").innerHTML += vetor[posicao] + " ";
    }
  }
  
  //Pesquisa vetor m
  function posicao() {
    let vetor = [1, 3, 5, 7, 9, 11];
    let achou = false;
    var numero = parseInt(document.getElementById("procurar").value);
  
    for (let posicao = 0; posicao < 6; posicao++) {
      if (vetor[posicao] == numero) {
        document.getElementById("mostrar").innerHTML =
          "Encontrou na posição: " + posicao;
        achou = true;
      }
    }
  
    if (achou == false) {
      document.getElementById("mostrar").innerHTML = "O número não está no vetor";
    }
  } 
  
  //Tabela de dados m
  function tabela() {
    let nome = ["Andre", "Thiago", "Bruno", "Carlos", "Cassio"];
    let altura = [1.71, 2.08, 1.75, 1.90, 1.71];
  
    document.getElementById("mostrar").innerHTML = "";
  
    for (let posicao = 0; posicao < 5; posicao++) {
      document.getElementById("mostrar").innerHTML +=
        nome[posicao] + "\t\t" + altura[posicao] + "<br>";
    }
  }
  
  //Diagonal principal
  function diagonal() {
    const TAMANHO = 5;
    let matriz = Array(TAMANHO) 
      .fill()
      .map(() => Array(TAMANHO).fill(" "));
  
    preenche(matriz);
    exibe(matriz);
  }
  
  function preenche(matriz) {
    for (let linha = 0; linha < matriz.length; linha++) {
      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        if (linha === coluna) {
          matriz[linha][coluna] = "*";
        } else {
          matriz[linha][coluna] = " ";
        }
      }
    }
  }
  
  function exibe(matriz) {
    let output = "";
    for (let linha = 0; linha < matriz.length; linha++) {
      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        output += "[" + matriz[linha][coluna] + "]";
      }
      output += "\n";
    }
    alert(output);
  }
  
  //Exibe matriz m
  function exibe() {
    const TAMANHO = 5;
    let matriz = Array(TAMANHO)
      .fill()
      .map(() => Array(TAMANHO).fill(0));
    let output = "";
  
    for (let linha = 0; linha < TAMANHO; linha++) {
      for (let coluna = 0; coluna < TAMANHO; coluna++) {
        matriz[linha][coluna] = Math.floor(Math.random() * 9) + 1;
        output += "[" + matriz[linha][coluna] + "]";
      }
      output += "\n";
    }
    
    alert(output);
  }
  
  //Procedimento e função m
  function procedimento() {
    mensagem("Bem Vindo");
    alert("O resultado do primeiro cálculo é: " + calcula(5.0, 8.0));
    alert("O resultado do segundo cálculo é: " + calcula(5.0, 9.0));
    mensagem("Tchau");
  }
  
  function mensagem(texto) {
    var linha = "";
    for (var i = 0; i < 10; i++) {
      linha += "-";
    }
    alert(linha + "\n" + texto + "\n" + linha);
  }
  
  function calcula(a, b) {
    var resultado = a * a + b * b;
    return resultado;
  }
  
  //Animação
  function animacao() {
    let coluna_inicial = 0;
    let passos = 10;
  
    animar(coluna_inicial, passos);
  }
  
  function animar(coluna_inicial, passos) {
    let coluna_final = coluna_inicial + passos;
  
    for (let coluna = coluna_inicial; coluna < coluna_final; coluna++) {
      for (let andando = 0; andando <= 1; andando++) {
        console.clear();
        desenhar_lagarta(coluna, andando);
        aguardar(500);
      }
    }
    
    console.clear();
    desenhar_lagarta(coluna_final, 0);
    console.log("Animação concluída!");
  }
  
  function desenhar_lagarta(coluna, andando) {
    if (andando === 0) {
      branco(coluna * 3 + 14);
      console.log("\\ /");
      branco(coluna * 3);
      console.log("( )( )( )( )( 0.0 )");
    } else {
      branco(coluna * 3 + 7);
      console.log("( )");
      branco(4);
      console.log("\\ /");
      branco(coluna * 3 + 2);
      console.log("( )( ) ( )( 0.0 )");
    } 
  
    console.log("\n");
  }
  
  function branco(quantidade) {
    let brancos = 1;
    
    while (brancos <= quantidade) {
      console.log(" ");
      brancos++;
    }
  }
  
  function aguardar(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  
  //Parâmetro por referencia m
  function parametro() {
    let vet = { valor: 10 };
    preenche(vet);
  
    alert("Variável antes:\n" + vet.valor);
  
    alert("\n\nVariável após:\n" + vet.valor);
  }
  
  function preenche(v) {
    v.valor = Math.floor(Math.random() * 200) + 2;
  }
  
  function exibe(v) {
    alert(v + " ");
  
    v = 15;
  }
  
  //Vetores por parâmetro m
  function vetores() {
    let vet = new Array(20);
    preenche(vet);
  
    mostrarResultado("Vetor antes da ordenação:", vet);
  
    ordena(vet); 
  
    mostrarResultado("Vetor após a ordenação:", vet);
  }
  
  function preenche(v) {
    for (let i = 0; i < 20; i++) {
    
      v[i] = Math.floor(Math.random() * 200) + 2;
    }
  }
  
  function exibe(v) {
    let result = "";
    for (let i = 0; i < 20; i++) {
      result += v[i] + " ";
    }
    return result;
  }

  function ordena(v) {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 19; j++) {
        if (v[j] > v[j + 1]) {
          troca(v, j, j + 1);
        }
      }
    }
  }
  
  function troca(v, a, b) {
    let c = v[a];
    v[a] = v[b];
    v[b] = c;
  }
  
  function mostrarResultado(mensagem, vetor) {
    const divResultado = document.getElementById("mostrar");
    divResultado.innerHTML += `<p>${mensagem}</p>`; 
    divResultado.innerHTML += `<p>${exibe(vetor)}</p>`;
  }
  
  //Fibonacci resursivo m
  function calcularFibonacci() {
    const numero = parseInt(document.getElementById("sequencia").value);
    let resultado = "";
  
    for (let i = 2; i <= numero; i++) {
      resultado += fibonacci(i) + " ";
    }
  
    document.getElementById("mostrar").innerHTML = resultado;
  }
  
  //Fibonacci resursivo m
  function calcularFibonacci() {
    const numero = parseInt(document.getElementById("sequencia").value);
    let resultado = "";
  
    for (let i = 2; i <= numero; i++) {
      resultado += fibonacci(i) + " ";
    }
  
  
    document.getElementById("mostrar").innerHTML = resultado;
  }
  
  function fibonacci(posicao) {
    if (posicao <= 0) {
      return 0;
    } else if (posicao === 1) {
      return 2;
    }
  
    let a = 0;
    let b = 2;
    let temp;
  
    for (let i = 2; i < posicao; i++) {
      temp = a + b; 
      a = b;
      b = temp;
    }
  }