const chat = document.querySelector('.chat-container');
const inputText = document.querySelector('.input-text');
const inputButton = document.querySelector('.input-button');
// chat.scrollTop = chat.scrollHeight;

let userMessage;
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

  chat.appendChild(createChatLi(userMessage, 'user-message'));

  if (count == 0) {
    setTimeout(() => {
      chat.appendChild(createChatLi(answers[0], 'bot-message'));
      playAudio('../audios/1.mp3');
    }, 1500);
    count = 1;
    inputText.value = '';
  } else if (count == 1) {
    setTimeout(() => {
      chat.appendChild(createChatLi(answers[1], 'bot-message'));
      playAudio('../audios/2.mp3');
    }, 1500);
    count = 2;
    inputText.value = '';
  } else if (count == 2) {
    setTimeout(() => {
      chat.appendChild(createChatLi(answers[2], 'bot-message'));
      playAudio('../audios/3.mp3');
    }, 1500);
    count = 3;
    inputText.value = '';  
  }
}

inputButton.addEventListener('click', handleChat);