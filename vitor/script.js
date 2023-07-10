    // Data de destino para o contador
    const dataDestino = new Date('2023-03-13');

    function atualizarContador() {
      // Data atual
      const dataAtual = new Date();

      // Calcula a diferença entre as datas em milissegundos
      const diferenca = dataDestino - dataAtual;

      // Calcula o número de dias
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24 * -1));

      document.getElementById('dias').innerHTML = dias

      // Agendando a atualização do contador a cada segundo (opcional)
      setTimeout(atualizarContador, 1000);
    }

    // Inicializa o contador
    atualizarContador();

    // Defina o tempo (em milissegundos) após o qual o scroll automático ocorrerá
var tempoDelay = 5000; // 5 segundos

// Função para fazer o scroll automático
function scrollAutomatico() {
  // Obtenha a altura total da página
  var alturaPagina = document.documentElement.scrollHeight - window.innerHeight;

  // Faça o scroll até o final da página
  window.scrollTo({
    top: alturaPagina,
    behavior: 'smooth' // Adiciona uma animação de rolagem suave
  });
};

// Execute o scroll automático após o tempo definido
setTimeout(scrollAutomatico, tempoDelay);

const elemnts = document.querySelectorAll('.grid2');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove('active')
    })
    button.classList.add('active')

    const selectedMonth = button.dataset.month;

    elemnts.forEach((elemnt) => {
      const elemntMonth = elemnt.dataset.month
      if (selectedMonth == elemntMonth) {
        elemnt.style.display = "block"
      } else {
        elemnt.style.display = "none"
      }
    })
  })
})

