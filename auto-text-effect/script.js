const textEl = document.querySelector('#text')
const speed = document.querySelector('#speed')
const text = textEl.innerText

let delay = 300 / speed.value
let idx = 1

autoTextEffect()

function autoTextEffect() {
    textEl.innerHTML = text.slice(0, idx)
    idx++
    if (idx > text.length) idx = 1
    setTimeout(autoTextEffect, delay)
}

speed.addEventListener('input', (e) => {
    delay = 300 / e.target.value
})