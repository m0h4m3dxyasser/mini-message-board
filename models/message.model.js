const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

function getMessages() {
  return messages;
}

function addMessage(message) {
  messages.push(message);
}

module.exports = {
  getMessages,
  addMessage
};