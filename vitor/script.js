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
const buttons = document.querySelectorAll('.month');
const yearButtons = document.querySelectorAll('.year');
const monthContainers = document.querySelectorAll('.months');

var currentYear = new Date().getFullYear();

function matchYear(year) {
  let active = document.getElementById(year);
  active.classList.remove('hidden')

  elemnts.forEach((elemnt) => {
    if (elemnt.dataset.year == year) {
      console.log(year)
      elemnt.classList.remove('hidden')
    } else (elemnt.classList.add('hidden'))
  })

}

yearButtons.forEach((yearBtn) => {
  yearBtn.addEventListener("click", ()=> {
    yearButtons.forEach((btn) => {
      btn.classList.remove('active')
    })
    yearBtn.classList.add('active')
    monthContainers.forEach((container) => {
      container.classList.add('hidden')
    })

    const selectedYear = yearBtn.dataset.year;
    const yearDisplay = document.getElementById(selectedYear)
    yearDisplay.classList.remove('hidden')
    currentYear = selectedYear
    console.log(currentYear)
    matchYear(selectedYear)
    

  })
})

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove('active')
    })
    button.classList.add('active')

    const selectedMonth = button.dataset.month;
    const selectedYear = button.dataset.year;

    elemnts.forEach((elemnt) => {
      const elemntMonth = elemnt.dataset.month
      if (selectedMonth === elemntMonth && selectedYear === elemnt.dataset.year) {
        elemnt.classList.remove('hidden')
      } else {
        elemnt.classList.add('hidden')
      }
    })


  })
})



function setup() {
  elemnts.forEach((elemnt) => {
    matchYear(currentYear)
    console.log(elemnt.dataset.year, currentYear  )
    if (elemnt.dataset.year==currentYear) {
      return
    }
    else {elemnt.classList.add('hidden')}
})

};

setup()

