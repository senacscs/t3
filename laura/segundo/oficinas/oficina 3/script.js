const button = document.getElementById("button")

button.addEventListener("click", function() {
  document.body.classList.toggle("mudar-bg")
})

// const button = document.getElementById("button")

// button.addEventListener("click", () => {
//   document.body.classList.toggle("mudar-bg")
// })

const links = document.querySelectorAll("li")

function adicionarClasseAoClick(event) {
  this.classList.toggle("ativo")
}

links.forEach((link) => {
  link.addEventListener("click", adicionarClasseAoClick)
})