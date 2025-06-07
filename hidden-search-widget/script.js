const btn = document.querySelector('button')
const input = document.querySelector('input')
const search = document.querySelector('.search');
btn.addEventListener('click', (e) => {
    search.classList.toggle('active')
    input.focus()
    e.stopPropagation()
})