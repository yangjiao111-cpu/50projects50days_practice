const text = document.querySelector('#text')
const tokens = document.querySelector('.tokens')
let tokenArr = null
text.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value = ''
        if (tokenArr) {
            random()
            tokenArr = null
        }
        return
    }
    tokens.innerHTML = ''
    tokenArr = e.target.value.split(',')
    tokenArr.forEach(e => {
        if (e !== '') {
            const span = document.createElement('span')
            span.innerText = e;
            tokens.appendChild(span)
        }
    })
})
function random() {
    const tags = document.querySelectorAll('.tokens span')
    let count = 20;
    const id = Math.floor(Math.random() * tags.length)
    tags[id].classList.add('active')
    setTimeout(() => {
        tags[id].classList.remove('active')
    }, 50)
    let timerId = setInterval(() => {
        count--;
        const id = Math.floor(Math.random() * tags.length)
        tags[id].classList.add('active')
        if (count == 0) {
            clearInterval(timerId)
            return
        }
        setTimeout(() => {
            tags[id].classList.remove('active')
        }, 50)
    }, 100)
}