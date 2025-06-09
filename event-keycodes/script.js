const key = document.querySelector('#key')
const keyCode = document.querySelector('#keyCode')
const code = document.querySelector('#code')
window.addEventListener('keydown', (e) => {
    document.querySelector('.key').classList.add('hidden')
    document.querySelector('.insert').classList.remove('hidden')
    key.innerHTML = `${e.key === ' ' ? 'Space' : e.key}<span>event.key</span>`
    keyCode.innerHTML = `${e.keyCode}<span>event.keyCode</span>`
    code.innerHTML = `${e.code}<span>event.code</span>`
})