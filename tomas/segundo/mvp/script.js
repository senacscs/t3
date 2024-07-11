function loadPage(page) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active-section'));

    if (page === 'home') {
        document.querySelector('.home-section').classList.add('active-section');
    } else if (page === 'chat') {
        document.querySelector('.chat-section').classList.add('active-section');
    } else if (page === 'contact') {
        document.querySelector('.contact-section').classList.add('active-section');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() !== '') {
        const chatBox = document.getElementById('chat-box');
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.innerHTML = `<strong>Você:</strong> ${message}`;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById('message').value = '';

        // Simulando resposta do suporte
        setTimeout(() => {
            const supportMessage = document.createElement('div');
            supportMessage.classList.add('chat-message');
            supportMessage.innerHTML = `<strong>Suporte:</strong> Obrigado pela mensagem. Estamos verificando sua consulta.`;
            chatBox.appendChild(supportMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000);
    }
}
