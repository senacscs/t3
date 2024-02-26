const animatedLink = document.getElementById('animated-link');

let colors = ['#FF0000', '#00FF00', '#0000FF']; // Lista de cores a serem alternadas
let currentColorIndex = 0;

function changeColor() {
  animatedLink.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Avança para a próxima cor
}

// Inicia a animação a cada 1000 milissegundos (1 segundo)
setInterval(changeColor, 1000);
