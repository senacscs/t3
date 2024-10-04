// Mostrar sugestões de pesquisa ao focar
document.getElementById('search-input').addEventListener('focus', function() {
    document.getElementById('search-suggestions').style.display = 'block';
});

// Ocultar sugestões de pesquisa ao clicar fora
document.addEventListener('click', function(event) {
    if (!document.querySelector('.search-bar').contains(event.target)) {
        document.getElementById('search-suggestions').style.display = 'none';
    }
});

// Animações de clique
document.querySelectorAll('button, a').forEach(function(element) {
    element.addEventListener('click', function() {
        element.style.transition = 'transform 0.1s ease';
        element.style.transform = 'scale(0.95)';
        setTimeout(function() {
            element.style.transform = 'scale(1)';
        }, 100);
    });
});

// Simular notificações
function adicionarNotificacao() {
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        badge.textContent = parseInt(badge.textContent) + 1;
    }
}

document.querySelector('li span:contains("Notificações")').addEventListener('click', adicionarNotificacao);

