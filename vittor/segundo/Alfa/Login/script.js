document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email && password) {
        // Redireciona para a página desejada após login bem-sucedido
        window.location.href = "./sucessologin/sucessologin.html";
    } else {
        alert("Preencha todos os campos!");
    }
});
