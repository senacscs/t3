//O código tem alguns comentários
//perdidos para os oleguinhas não copiarem

//Olá Gente!
function olaMundo() {
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
    var altura4 = parseFloat(document.getElementById("quartaraAltura").value);
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
  }
  
  
  