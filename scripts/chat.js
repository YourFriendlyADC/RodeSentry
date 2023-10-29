const chat = document.querySelector('.chat-container');
const inputText = document.querySelector('.input-text');
const inputButton = document.querySelector('.input-button');
// chat.scrollTop = chat.scrollHeight;

let userMessage;
const API_KEY = "";
let count = 0;

let answers = [
  "Hola, soy tu asistente Alice, ¿cómo puedo ayudarte?",
  "Rodesentry es un detector de microsueños, diseñado para identificar momentos en los que una persona cierra los ojos por un período de tiempo prolongado, lo cual podría indicar un microsueño.",
  "Este sistema funciona con un modelo de inteligencia artificial que detecta las facciones de la cara mediante puntos. Con la información proporcionada por este, calcula la distancia entre los párpados y detecta cuando estos se cierran por un tiempo prolongado. En caso de detectar algún indicio de microsueño, frena el carro de manera controlada hasta llegar a un sitio seguro."
]

function playAudio(path) {
  let audio = new Audio(path);
  audio.play();
}

const generateResponse = (botMessage) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = botMessage.querySelector('p');

  const requestedOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: userMessage}],
    })
  }

  fetch(API_URL, requestedOptions).then(response => response.json()).then(data => {
    messageElement.textContent = data.choices[0].message.content;
  }).catch(error => {
    messageElement.textContent = 'Lo siento, no pude entender eso. ¿Podrías repetirlo?';
  });
}

const createChatLi = (message, className) => {
  const chatLi = document.createElement('li');
  chatLi.classList.add(className);
  let chatContent = className === 'user-message' ? `<p>${message}</p>` : `<p>${message}</p>`;
  if (className == 'user-message') {
    chatLi.innerHTML = `
    ${chatContent}
    <i class="fa-solid fa-user"></i>`;
  } else {
    chatLi.innerHTML = `
    <i class="fa-solid fa-user-astronaut"></i>
    ${chatContent}`;
  }  
  return chatLi;
}

const handleChat = () => {
  userMessage = inputText.value.trim();
  if (!userMessage) return;

  inputText.value = '';
  chat.appendChild(createChatLi(userMessage, 'user-message'));

  setTimeout(() => {
    const botMessage = createChatLi("Pensando...", 'bot-message');
    chat.appendChild(botMessage);
    generateResponse(botMessage);
    // playAudio(`../audios/${count + 1}.mp3`);
  }, 500);
}

inputButton.addEventListener('click', handleChat);
inputText.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleChat();
});