const button = document.getElementById("button")

button.addEventListener("click", function() {
  alert("clicou")
})

// const button = document.getElementById("button")

// button.addEventListener("click", () => {
//   console.log("clicou")
// })

const links = document.querySelectorAll("li")

function adicionarClasseAoClick(event) {
  this.classList.toggle("ativo")
}

links.forEach((link) => {
  link.addEventListener("click", adicionarClasseAoClick)
})