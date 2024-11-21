const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('message', (event) => {
  const message = event.data;
  displayMessage(message);
});

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  ws.send(message);
  displayMessage(message, true);
  messageInput.value = '';
});

function displayMessage(message, isSender = false) {
  const messageContainer = document.createElement('div');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  
  messageContainer.classList.add('message-container');
  
  if (isSender) {
    messageContainer.classList.add('sender-message-container');
    messageElement.classList.add('message-bubble', 'sender-message-bubble');
  } else {
    messageElement.classList.add('message-bubble');
  }
  
  messageContainer.appendChild(messageElement);
  messagesDiv.appendChild(messageContainer);
  
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}