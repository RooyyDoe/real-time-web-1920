const socket = io();

const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message')
// const name = document.getElementById('name')
const btn = document.getElementById('send-button')
const output = document.getElementById('message-output-list')
const feedback = document.getElementById('new-feedback')

const name = prompt('What is your name?')
let timeout

appendMessage('You joined')

socket.emit('new-user', name)


socket.on('chat-message', data => {
    feedback.innerText = ''
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
    appendMessage(`Say hello to ${name}`)
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} left the server`)
})

socket.on('typing-message', name => {
    if (name) {
        feedback.innerText = `${name} is typing a message...`
    } else {
        feedback.innerText = ''
    }
})

messageForm.addEventListener('submit', event => {
    event.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit('send-message', message)
    messageInput.value = ''
})

messageInput.addEventListener('keyup', () => {
    socket.emit('typing-message', name)
    clearTimeout(timeout)
    timeout = setTimeout(timeoutFunction, 2000)
})

function timeoutFunction() {
    socket.emit("typing-message", false);
}

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.classList.add('message-output')

    const newMessage = document.createElement('p')
    newMessage.classList.add('new-message')
    newMessage.innerText = message

    output.append(messageElement)
    messageElement.append(newMessage)
    scrollDown()
}

function scrollDown() {
    //https://exceptionshub.com/scroll-automatically-to-the-bottom-of-the-page.html
    window.scrollTo(0, document.body.scrollHeight);
}