function insert(num)

{

    var numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero+ num

}

function clean()

{

    document.getElementById('resultado').innerHTML = "";

}

function back()

{

   var resultado = document.getElementById('resultado').innerHTML;

   document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);

}

function calcular()

{

    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado)

        document.getElementById('resultado').innerHTML = eval(resultado);

     }
     <script>
    // Funções JavaScript para a calculadora
    function adicionarNumero(numero) {
      // Lógica para adicionar o número no campo de resultado
    }

    function realizarOperacao(operador) {
      // Lógica para armazenar o operador selecionado
    }

    function calcularResultado() {
      // Lógica para realizar o cálculo e exibir o resultado
    }

    function limparCalculadora() {
      // Lógica para limpar a calculadora
    }
  </script>
