const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const weekDay = date.getDay()
const day = date.getDate()

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro'
]
const weekDays = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
]

let monthWritten = months[month]
let weekDayWritten = weekDays[weekDay]

const dateDisplay = document.getElementById('date')

var text = `Senac Santa Cruz do Sul, ${weekDayWritten}, ${day} de ${monthWritten}, ${year}`;

dateDisplay.innerHTML = text


const monthElements = document.querySelectorAll(".month");
const articleElements = document.querySelectorAll(".article");
const showAllButton = document.querySelector("#show-all");
  
monthElements.forEach((monthElement) => {
    monthElement.addEventListener("click", () => {
        monthElements.forEach((element) => {
            element.classList.remove('active');
        });
        monthElement.classList.add('active');

        const selectedMonth = monthElement.dataset.month;
      
        articleElements.forEach((articleElement) => {
        const articleMonth = articleElement.dataset.month;
        
        if (selectedMonth == articleMonth) {
          articleElement.style.display = "block";
        } else {
          articleElement.style.display = "none";
        }
      });
    });
  });
showAllButton.addEventListener("click", () => {
    articleElements.forEach((articleElement) => {
        articleElement.style.display = "block";
    });
  });
  