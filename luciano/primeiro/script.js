const btnAnimation = document.getElementById("btnAnimation");
const blackScreen = document.getElementById("blackScreen");

btnAnimation.addEventListener("click", () => {
  blackScreen.classList.add("active");
  // Execute a animação após um pequeno atraso
  setTimeout(() => {
    blackScreen.classList.remove("active");
  }, 2000); // Tempo em milissegundos para a duração da animação
});