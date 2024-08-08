let chatOutput = document.getElementById('chat-output');

function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    let userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    chatOutput.appendChild(userMessage);

    processMessage(userInput);
    document.getElementById('user-input').value = '';
}

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
    } else {
        response = 'Desculpe, não entendi. Pode repetir?';
    }

    let botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerText = response;
    chatOutput.appendChild(botMessage);
}
