//ola mundo
function olaMundo() {
  document.getElementById("mostrar").innerHTML = "Olá!";
  console.log(`Olá!`);
  alert(`Olá!`);
}

function numeroDigitado() {
  document.getElementById("mostrar").innerHTML =
    "O número digitado foi " + numero.value;
}

// funcao inicio ()
// {
//     cadeia nome

//     escreva("Digite seu nome: ")
//     leia(nome)
// }
function nomeDigitado() {
  //var nome = prompt("Digite seu nome: ");
  //document.getElementById("mostrar").innerHTML = "A sua cor favorita é " + nome;
  document.getElementById("mostrar").innerHTML =
    "A sua cor favorita é " + nome.value;
}

function calculadora() {
  let a, b, soma, sub, mult, div;
  a = parseFloat(prompt("Digite o primeiro número:"));
  b = parseFloat(prompt("Digite o segundo número:"));

  soma = a + b;
  sub = a - b;
  mult = a * b;
  div = a / b;

  document.getElementById("mostrar").innerHTML =
    "Soma = " +
    soma +
    "\n" +
    "Subtração = " +
    sub +
    "\n" +
    "Multiplicação = " +
    mult +
    "\n" +
    "Divisão = " +
    div;
}

function prioridades() {
  let resultado;

  resultado = 5.0 + 4.0 * 2.0;
  document.getElementById("mostrar").innerHTML +=
    "Operação: 5 + 4 * 2 = " + resultado + "\n";

  resultado = (5.0 + 4.0) * 2.0;
  document.getElementById("mostrar").innerHTML +=
    "Operação: (5 + 4) * 2 = " + resultado + "\n";

  resultado = 1.0 + (2.0 / 3.0) * 4.0;
  document.getElementById("mostrar").innerHTML +=
    "Operação: 1 + 2 / 3 * 4 = " + resultado + "\n";

  resultado = (1.0 + 2.0) / (3.0 * 4.0);
  document.getElementById("mostrar").innerHTML +=
    "Operação: (1 + 2) / (3 * 4) = " + resultado + "\n";
}

function divisoes() {
  let metade_inteira, resto, valor;

  valor = parseFloat(prompt("Digite um valor: "));

  metade_inteira = valor / 2;
  resto = valor % 3;

  document.getElementById("mostrar").innerHTML =
    "A metade inteira do numero é: " +
    metade_inteira +
    "\n" +
    "O resto (mod) da divisão por 3 é: " +
    resto;
}

function potenciaRaiz() {
  let valor, potencia, raiz_quadrada;

  valor = parseFloat(prompt("Digite um valor: "));

  potencia = Math.pow(valor, 3.0);
  raiz_quadrada = Math.sqrt(valor, 2.0);

  document.getElementById("mostrar").innerHTML =
    "O número ao cubo é: " +
    potencia +
    "\n" +
    "A raiz quadrada do número é: " +
    raiz_quadrada;
}

function troca() {
    let a, b, aux;
  
    a = (prompt("Informe um valor para a variável A: "));
    b = (prompt("Informe um valor para a variável B: "));
  
    console.clear();
    document.getElementById("mostrar").innerHTML += ("Variáveis antes da troca: " + "A = " + a + "; B = " + b);
  
    aux = b;
    b = a;
    a = aux;
  
    console.log("\n");
  
    document.getElementById("mostrar").innerHTML += ("Variáveis após a troca: " + "A = " + a + "; B = " + b);
}

function maioridade(){
    const maioridade = 18;

    let idade, anos;

    idade = parseInt(prompt("Digite sua idade: "))

    anos = maioridade - idade;

    if (anos > 0){
        alert("Falta(m) " + anos + " ano(s) para você atingir a maioridade")
    }
    else{
        alert("Você já pode ser preso")
    }
}

function altura(){
    let altura1, altura2, altura3, media_altura;

    altura1 = parseFloat(prompt("Escreva o primeiro peso: "));
    altura2 = parseFloat(prompt("Escreva o segundo peso: "));
    altura3 = parseFloat(prompt("Escreva o terceiro peso: "));
    media_altura = (altura1 + altura2 + altura3) / 3;
    alert("A média dos pesos é " + Math.round(media_altura) + " quilos")
}

function loja() {
  // Os preços dos produtos são definidos em constantes
  const PRECO_SUCO = 1.50;
  const PRECO_CAFÉ = 2.00;
  const PRECO_REFRIGERANTE = 2.50;

  let nome;
  let quantidade_suco, quantidade_café, quantidade_refrigerante;
  let total_suco, total_café, total_refrigerante, total_pagar;

  nome = prompt("Digite seu nome: ");

  quantidade_suco = parseInt(prompt("Digite a quantidade de sucos que deseja comprar: "));
  quantidade_café = parseInt(prompt("Digite a quantidade de cafés que deseja comprar: "));
  quantidade_refrigerante = parseInt(prompt("Digite a quantidade de refrigerantes que deseja comprar: "));

  total_suco = PRECO_SUCO * quantidade_suco;
  total_café = PRECO_CAFÉ * quantidade_café;
  total_refrigerante = PRECO_REFRIGERANTE * quantidade_refrigerante;

  total_pagar = total_suco + total_refrigerante + total_café;

  console.clear();

  alert("Cliente: " + nome);
  alert("Suco: " + quantidade_suco);
  alert("Café: " + quantidade_café);
  alert("Refrigerante: " + quantidade_refrigerante);
  alert("Total a pagar: R$ " + total_pagar.toFixed(2));
}
