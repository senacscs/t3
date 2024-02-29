const bars = document.getElementById('bars')
const menuHamburguer = document.getElementById('hamburguer')

bars.addEventListener('click', () => {
  menuHamburguer.classList.toggle('ativo')
})