// Função original para rolagem (mantida)
function mostrarMensagem() {
    // Rola suavemente até a seção de tecnologias
    document.getElementById('tecnologias').scrollIntoView({ 
        behavior: 'smooth' 
    });
    console.log("Usuário iniciou a leitura e o JavaScript está funcionando!");
}

// ----------------------------------------------------
// Novo Conteúdo JS: Alternar Dark Mode
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Verificar a preferência salva no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // 2. Adicionar o evento de clique ao botão
    themeToggle.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no corpo da página
        body.classList.toggle('dark-mode');

        // 3. Salvar a preferência do usuário no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});