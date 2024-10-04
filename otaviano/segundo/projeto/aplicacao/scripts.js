const OPENAI_API_KEY = 'sk-hWcRqIsZfKkLSaKKJkBhrCPFGNDiP17DRkuI6k5VUNT3BlbkFJnjpOgvpZc789aoBVX1o4E_PrqaSdY5Ql8cAhmaGbIA';

async function processMessage(message) {
    let response = '';

    try {
        const result = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'text-davinci-003',  // Ou qualquer outro modelo disponível
                prompt: message,
                max_tokens: 150,  // Limite de tokens (ajustar conforme necessidade)
                n: 1,
                stop: null,
                temperature: 0.7
            })
        });

        const data = await result.json();
        response = data.choices[0].text.trim();

    } catch (error) {
        response = 'Desculpe, ocorreu um erro ao tentar processar sua pergunta.';
    }

    let botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerText = response;
    chatOutput.appendChild(botMessage);
}


let chatOutput = document.getElementById('chat-output');

// Função para enviar a mensagem do usuário
function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Cria e exibe a mensagem do usuário
    let userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    chatOutput.appendChild(userMessage);

    // Processa a mensagem e retorna uma resposta
    processMessage(userInput);
    document.getElementById('user-input').value = '';
}

// Função para processar a mensagem e gerar uma resposta
function processMessage(message) {
    let response = '';

    if (message.toLowerCase().includes('praias')) {
        response = 'Aqui estão algumas das melhores praias...';
    } else if (message.toLowerCase().includes('profissionais')) {
        response = 'Aqui estão algumas áreas profissionais...';
    } else if (message.toLowerCase().includes('geração z')) {
        response = 'Termo da Geração Z refere-se a...';
    } else if (message.toLowerCase().includes('entrevista')) {
        response = 'Aqui estão algumas perguntas para se preparar para uma entrevista...';
    } else if (message.toLowerCase().includes('remedio')) {
        response = 'Ok irei lhe ajudar com os seus remedios';
    } else {
        response = 'Desculpe, não entendi. Pode repetir?';
    }

    let botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerText = response;
    chatOutput.appendChild(botMessage);
}

// Código para lidar com a barra lateral e a navegação
const navItems = ['Início', 'Calendário', 'Documentos', 'Perfil'];
let active = 1;

// Função para mudar o item ativo no menu
function setActive(index) {
    active = index;
    updateSidebar();
}

// Atualiza a barra lateral com base no item ativo
function updateSidebar() {
    const menuButtons = document.querySelectorAll('.menu button');
    menuButtons.forEach((button, index) => {
        if (index === active) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Navegação entre as seções
function navigate(index) {
    setActive(index);

    if (index === 0) {
        // Lógica para ir para a página inicial
        alert('Ir para a página inicial');
    } else if (index === 1) {
        // Lógica para ir para o calendário
        location.href = 'calendario/index.html';
    } else if (index === 2) {
        // Lógica para ir para os documentos
        location.href = 'digdoc/index.html';
    } else if (index === 3) {
        // Lógica para ir para o perfil
        alert('Ir para a página de perfil');
    }
}

// Adiciona os eventos de clique na barra lateral
document.querySelectorAll('.menu button').forEach((button, index) => {
    button.addEventListener('click', () => navigate(index));
});

