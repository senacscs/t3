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
    if (message.toLowerCase().includes('remedios')) {
    response = 'Ok, vou te ajudar com os seus remédios. Qual você precisa tomar agora?';
} else if (message.toLowerCase().includes('cartao de vacina')) {
    response = 'Entendi, você gostaria de informações sobre o seu cartão de vacinação?';
} else if (message.toLowerCase().includes('tempo hoje')) {
    response = 'A previsão do tempo para hoje é...';
} else if (message.toLowerCase().includes('filhos')) {
    response = 'Você quer saber como estão seus filhos ou se precisa de ajuda para ligar para eles?';
} else if (message.toLowerCase().includes('alimentacao')) {
    response = 'Lembre-se de comer bem. Quer dicas de refeições saudáveis?';
} else if (message.toLowerCase().includes('pressao')) {
    response = 'Precisa de ajuda para medir sua pressão arterial agora?';
} else if (message.toLowerCase().includes('medico')) {
    response = 'Posso te lembrar da próxima consulta médica. Qual o dia e horário?';
} else if (message.toLowerCase().includes('consulta')) {
    response = 'Quer que eu verifique os horários de sua consulta ou marque uma nova?';
} else if (message.toLowerCase().includes('dor')) {
    response = 'Você está com dor? Posso ajudar a anotar e lembrar de falar com seu médico sobre isso.';
} else if (message.toLowerCase().includes('netos')) {
    response = 'Que legal, como estão seus netos? Posso ajudar a enviar uma mensagem para eles?';
} else if (message.toLowerCase().includes('memoria')) {
    response = 'Quer jogar um jogo de memória ou receber dicas para melhorar a memória?';
} else if (message.toLowerCase().includes('longevidade')) {
    response = 'Dicas de longevidade incluem uma boa alimentação, exercícios e descanso. Quer saber mais?';
} else if (message.toLowerCase().includes('exercicio')) {
    response = 'Você gostaria de fazer um exercício simples? Posso te guiar em alongamentos ou caminhadas.';
} else if (message.toLowerCase().includes('passeio')) {
    response = 'Quer sugestões de lugares para passear perto de sua casa?';
} else if (message.toLowerCase().includes('comida')) {
    response = 'Que tipo de comida você está procurando? Algo saudável ou uma sobremesa gostosa?';
} else if (message.toLowerCase().includes('agua')) {
    response = 'É importante beber água. Você já tomou sua água hoje?';
} else if (message.toLowerCase().includes('soneca')) {
    response = 'Uma soneca é sempre boa. Que tal tirar um descanso agora?';
} else if (message.toLowerCase().includes('conta de luz')) {
    response = 'Precisa de ajuda para verificar ou pagar sua conta de luz?';
} else if (message.toLowerCase().includes('netflix')) {
    response = 'Quer assistir algo no Netflix? Posso sugerir alguns filmes ou séries.';
} else if (message.toLowerCase().includes('jardim')) {
    response = 'Seu jardim está precisando de cuidados? Posso te dar dicas para cuidar das plantas.';
} else if (message.toLowerCase().includes('saudade')) {
    response = 'Está com saudade de alguém? Posso te ajudar a ligar ou enviar uma mensagem.';
} else if (message.toLowerCase().includes('calendario')) {
    response = 'Quer que eu mostre o seu calendário de atividades ou lembretes?';
} else if (message.toLowerCase().includes('caminhada')) {
    response = 'Uma caminhada vai fazer bem! Precisa de ajuda para se organizar?';
} else if (message.toLowerCase().includes('medicacao')) {
    response = 'Precisa de ajuda com sua medicação? Posso lembrar os horários ou tirar dúvidas.';
} else if (message.toLowerCase().includes('dieta')) {
    response = 'Você quer dicas de alimentação saudável para sua dieta?';
} else if (message.toLowerCase().includes('descanso')) {
    response = 'O descanso é importante. Posso te lembrar de fazer pausas ao longo do dia.';
} else if (message.toLowerCase().includes('sono')) {
    response = 'Quer dicas para melhorar a qualidade do sono? Posso ajudar!';
} else if (message.toLowerCase().includes('fatura')) {
    response = 'Precisa de ajuda com a fatura de algum serviço?';
} else if (message.toLowerCase().includes('televisao')) {
    response = 'Posso te ajudar a encontrar o seu programa favorito na TV.';
} else if (message.toLowerCase().includes('telefone')) {
    response = 'Precisa de ajuda com o seu telefone? Posso te ensinar a usar algumas funções.';
} else if (message.toLowerCase().includes('carregar')) {
    response = 'Está com dificuldade para carregar o seu celular ou tablet? Posso te guiar.';
} else if (message.toLowerCase().includes('limpeza')) {
    response = 'Quer dicas para a limpeza de casa ou contratar um serviço?';
} else if (message.toLowerCase().includes('meditacao')) {
    response = 'Que tal uma sessão rápida de meditação para relaxar? Posso te guiar.';
} else if (message.toLowerCase().includes('filmes antigos')) {
    response = 'Gosta de filmes antigos? Posso te sugerir alguns clássicos.';
} else if (message.toLowerCase().includes('musica')) {
    response = 'Quer ouvir música? Posso sugerir algo relaxante ou de acordo com o seu gosto.';
} else if (message.toLowerCase().includes('lavanderia')) {
    response = 'Precisa de ajuda para lavar roupas ou encontrar um serviço de lavanderia?';
} else if (message.toLowerCase().includes('roupas')) {
    response = 'Quer dicas para organizar ou comprar roupas novas?';
} else if (message.toLowerCase().includes('conversa')) {
    response = 'Se precisar conversar, estou aqui para ouvir. Como você está se sentindo?';
} else if (message.toLowerCase().includes('lembrar')) {
    response = 'Precisa que eu te lembre de algo importante? Posso te ajudar com isso.';
} else if (message.toLowerCase().includes('tecnologia')) {
    response = 'Está com dificuldade em usar alguma tecnologia? Posso te guiar.';
} else if (message.toLowerCase().includes('pagamentos')) {
    response = 'Precisa de ajuda com pagamentos de contas? Posso te orientar.';
} else if (message.toLowerCase().includes('bicicleta')) {
    response = 'Que tal um passeio de bicicleta? Lembre-se de usar capacete e estar seguro.';
} else if (message.toLowerCase().includes('familia')) {
    response = 'Quer falar sobre sua família ou enviar uma mensagem para eles? Posso te ajudar.';
} else if (message.toLowerCase().includes('pesquisa')) {
    response = 'Quer que eu faça uma pesquisa na internet para você? O que você quer saber?';
} else if (message.toLowerCase().includes('comemoracao')) {
    response = 'Tem uma comemoração chegando? Posso te ajudar a se organizar.';
} else if (message.toLowerCase().includes('fotografia')) {
    response = 'Precisa de ajuda com suas fotos? Posso te ajudar a organizá-las ou tirá-las.';
} else if (message.toLowerCase().includes('dia de hoje')) {
    response = 'Quer saber as atividades do dia de hoje? Posso te lembrar.';
} else {
    response = 'Desculpe, não entendi. Pode repetir?';
}
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

