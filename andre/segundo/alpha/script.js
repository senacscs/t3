document.querySelector('.btn').addEventListener('click', function() {
  alert("Clique no botão 'Sobre nós' para saber mais!");
});

document.querySelectorAll('.info-item').forEach(item => {
  item.addEventListener('click', function() {
      alert(this.querySelector('h3').textContent);
  });
});
