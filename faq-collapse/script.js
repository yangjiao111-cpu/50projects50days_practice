const btns = document.querySelectorAll('.asked span')
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})