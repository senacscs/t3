
document.addEventListener('DOMContentLoaded', function() {
    var titulo = document.getElementById('titulo');
    var texto = titulo.innerText;
    titulo.innerText = '';
  
    function mostrarTexto(index) {
      if (index < texto.length) {
        titulo.innerHTML += texto.charAt(index);
        setTimeout(function() {
          mostrarTexto(index + 1);
        }, 100); // Ajuste o tempo de atraso conforme necessário
      }
    }
  
    mostrarTexto(0);
  });
  