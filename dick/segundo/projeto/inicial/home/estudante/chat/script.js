const messages = [
  {
    text: "Oi sor, tu poderia me ajudar com uma dúvida?",
    dh: new Date(),
    sender:"self"
  },
  {
    text: "Claro, sobre o que seria?",
    dh: new Date(),
  },
  {
    text: "Eu não sei o que acontece depois que o ar entra no pulmão.",
    dh: new Date(),
    sender:"self"
  },
  {
    text: "É absorvido pelos alvéolos, mas depois disso?",
    dh: new Date(),
    sender:"self"
  },
  {
    text: "Depois disso ainda não trabalhamos em aula, mas se quiser saber, pesquise, acho que você vai gostar.",
    dh: new Date(),
  },
  {
    text: "Ok, obrigada",
    dh: new Date(),
    sender: "self"
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
 
 