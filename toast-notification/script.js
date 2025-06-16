const btn = document.querySelector('.btn')
const body = document.querySelector('body')
let messageContainer = null
let msgCnt = 0
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        btn.click()
    }
})

btn.addEventListener('click', () => {
    const message = createMessage()
    if (!messageContainer) {
        const div = document.createElement('div')
        div.classList.add('message-container')
        messageContainer = div
    }
    messageContainer.appendChild(message)
    msgCnt++
    body.appendChild(messageContainer)
    setTimeout(() => {
        message.remove()
        msgCnt--
        if (msgCnt == 0) {
            messageContainer.remove()
            messageContainer = null
        }
    }, 3000)
})

function createMessage() {
    const message = document.createElement('div')
    message.classList.add('message')
    const text = messages[Math.floor(Math.random() * messages.length)]
    const type = types[Math.floor(Math.random() * types.length)]
    console.log(type);

    message.innerHTML = text
    message.classList.add(type)
    return message
}