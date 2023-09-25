//ola mundo
console.log ("oi");
function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
    console.log(`Olá Mundo!`);
alert(`Olá Mundo!`);
}

function numeroDigitado() {
    document.getElementById("mostrar").innerHTML = "O número digitado foi: " + numero.value;
}

// funcao inicio ()
//{
//   cadeia nome
    
//    escreva ("Digite seu nome: ")
//    leia (nome)
//}

function nomeDigitado() {
    document.getElementById ("mostrar").innerHTML = "O nome digitado foi: " + nome.value;
}

//funcao inicio()
//	{
//		real a, b, soma, sub, mult, div
//		
//		escreva("Digite o primeiro número: ")
//		leia(a)
//		escreva("Digite o segundo número: ")
//		leia(b)
//
//		soma = a + b // Soma os dois valores
//		sub  = a - b // Subtrai os dois valores
//		mult = a * b // Multiplica os dois valores
//		div  = a / b // Divide os dois valores
//
//		escreva("\nA soma dos números é igual a: ", soma) 		// Exibe o resultado da soma
//		escreva("\nA subtração dos números é igual a: ", sub) 		// Exibe o resultado da subtração
//		escreva("\nA multiplicação dos números é igual a: ", mult) 	// Exibe o resultado da multiplicação
//		escreva("\nA divisão dos números é igual a: ", div, "\n") 	// Exibe o resultado da divisão
//	}

  function calcular() {
    var primNum = document.getElementById("primeiroNum").value;
    var segmNum = document.getElementById("segundoNum").value;
    const sel = document.getElementById("select").value;
  
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
  
//  funcao inicio()
// {
//      real resultado
//
//      // Neste exemplo, a operação de multiplicação (*) será executada primeiro
//      resultado = 5.0 + 4.0 * 2.0
//      escreva("Operação: 5 + 4 * 2 = ", resultado) 
     // Neste exemplo, a operação de soma (+) será executada primeiro
//     resultado = (5.0 + 4.0) * 2.0
//      escreva("\nOperação: (5 + 4) * 2 = ", resultado)		
      /*
       * Neste exemplo, a operação de divisão (/) será executada primeiro, 
       * seguida pela operação de multiplicação (*). Por último, será 
       * executada a operação de soma (+)
       */
    //  resultado = 1.0 + 2.0 / 3.0 * 4.0 
  //    escreva("\nOperação: 1 + 2 / 3 * 4 = ", resultado)
      /*
       * Neste exemplo, a operação de soma (+) será executada primeiro, 
       * seguida pela operação de multiplicação (*). Por último, será 
       * executada a operação de divisão (/).
       */
//      resultado = (1.0 + 2.0) / (3.0 * 4.0)
//      escreva("\nOperação: (1 + 2) / (3 * 4) = ", resultado, "\n")
//  }
//}
  
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
  

//funcao inicio() 
//	{
//		inteiro metade_inteira, resto, valor
//		escreva("Digite um valor: ") 
//		leia(valor)
//		metade_inteira = valor / 2 // Calcula a metade inteira do valor
//		resto = valor % 3 // Calcula o resto da divisão do valor por 3
//		escreva("\nA metade inteira do numero é: ", metade_inteira)
//		escreva("\nO resto (mod) da divisão por 3 é: ", resto, "\n")
//}
//  function div() {
//    var valor = document.getElementById("valor").value;
//    var metade_inteira = valor / 2;
//    var resto = valor % 3;
 //   document.getElementById("mostrar").innerHTML =
 //     "metade inteira: " + metade_inteira + "<br>" + "resto: " + resto;
 // }

  function div() {
    var valor = document.getElementById("valor").value;
    var metade_inteira = valor / 2;
    var resto = valor % 3;
    document.getElementById("mostrar").innerHTML =
      "metade inteira: " + metade_inteira + "<br>" + "resto: " + resto;
  }
  
//  funcao inicio() 
//	{
//		real valor, potencia, raiz_quadrada	
//		escreva("Digite um valor: ") 
//		leia(valor)
//		potencia = mat.potencia(valor, 3.0)  	// Calcula o valor elevado ao cubo
//		raiz_quadrada = mat.raiz (valor, 2.0) 	// Calcula a raiz quadrada do valor
// Exibe os resultados
//		escreva("\nO número ao cubo é: ", potencia, "\n")
//		escreva("A raiz quadrada do número é: ", raiz_quadrada, "\n")
//	}

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
  
//  funcao inicio()
//	{
//		const inteiro MAIORIDADE = 18
//		inteiro idade, anos
//		escreva("Digite sua idade: ")
//		leia(idade)
		// Calcula quantos anos faltam para atingir a maioridade
//		anos = MAIORIDADE - idade 
//	se (anos > 0)
//		{
//			escreva("Falta(m) ", anos, " ano(s) para você atingir a maioridade\n")
//		}
//		senao 
//		{
//			escreva("Você já atingiu a maioridade\n")
//		}
//	}

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
  
//  funcao inicio()
//	{
//		real altura1, altura2, altura3, media_altura
//		escreva("Digite a altura da primeira pessoa: ")
//		leia(altura1)
//		escreva("Digite a altura da segunda pessoa: ")
//		leia(altura2)
//		escreva("Digite a altura da terceira pessoa: ")
//		leia(altura3)
//		media_altura = (altura1 + altura2 + altura3) / 3
//		escreva("\nA média das alturas é: ", mat.arredondar(media_altura, 2), " metros\n")
//	}

  function altura() {
    var altura1 = parseFloat(document.getElementById("primeiraAltura").value);
    var altura2 = parseFloat(document.getElementById("segundaAltura").value);
    var altura3 = parseFloat(document.getElementById("terceiraAltura").value);
  
    media_altura = (altura1 + altura2 + altura3) / 3;
  
    document.getElementById("mostrar").innerHTML =
      "Média das alturas é: " + Math.round(media_altura) + " centímetros";
  }
  