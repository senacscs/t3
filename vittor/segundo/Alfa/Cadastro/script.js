// script.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar lógica para processar os dados do formulário, como validação ou envio a um servidor

    // Após processar, redireciona para a página desejada
    window.location.href = './sucessocadastro/sucessocadastro.html'; // Substitua 'welcome.html' pela página que você deseja
});
