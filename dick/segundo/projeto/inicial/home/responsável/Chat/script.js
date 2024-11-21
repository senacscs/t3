const messages = [
  {
    text: "Bom dia, o senhor poderia conversar agora?",
    dh: new Date(),
    sender: "rogerio",
  },
  {
    text: "Claro, sobre o que seria?",
    dh: new Date(),
    sender: "self",
  },
  {
    text: "A sua filha apresentou uma grande dificuldade em lidar com os erros que ela cometeu nas atividades. Será que você poderia conversar com ela?",
    dh: new Date(),
  },
  {
    text: "Faz sentido ela estar tão triste hoje então, converso com ela sim.",
    dh: new Date(),
    sender: "self",
  },
  {
    text: "Poderia me dizer sobre o que é o conteúdo das atividades, para assim conseguir ajudar ela?",
    dh: new Date(),
    sender: "self"
  },
  {
    text: "É sobre o sistema respiratório, ela ainda não entendeu o que são os alvéolos.",
    dh: new Date(),
  },
  {
    text: "Ok, irei falar com ela sobre. Obrigado pelo contato.",
    dh: new Date(),
    sender: "self",
  },
  {
    text: "Capaz, agradeço a compreensão e a disponibilidade em ajudar.",
    dh: new Date(),
  },
  {
  text: "🤝",
    dh: new Date(),
    sender:"self"
  },
];
 
const inMessageModel = (message) => (
  ` <span class="material-symbols-outlined"> account_circle </span>
    <span class="in-text">
      ${message}
    </span>`
);
 
const outMessageModel = (message) => (
  `<span class="out-text">${message}</span>`
)
 
const messagesContainer = document.getElementById("chat-container");

 
function displayMessage(message) {
  const div = document.createElement("div");
  console.log(message.text)
  if (message.sender === "self") {
    div.classList.add('out-message')
    div.innerHTML = outMessageModel(message.text)
  } else {
    div.classList.add('in-message')
    div.innerHTML = inMessageModel(message.text)
  }
  messagesContainer.appendChild(div);
}
 
messages.forEach((message) => {
    console.log(message)
    displayMessage(message)
});
 
function addMessage(text) {
  const message = {
    text,
    dh: new Date(),
    sender: 'self'
  }
 
  displayMessage(message)
}

function handleSendMessage() {
  const text = document.getElementById('text')
  if (text.value.length === 0) {
    return;
  }
  addMessage(text.value)
  messagesContainer.scrollHeight = 10000
  text.value = ''
}
 
 