const btn = document.querySelector('button')
const input = document.querySelector('input')
btn.addEventListener('click', (e) => {
    input.classList.toggle('active')
    input.focus()
    e.stopPropagation()
})