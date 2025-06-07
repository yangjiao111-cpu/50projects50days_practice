const cards = document.querySelectorAll('.card-box li')
cards.forEach((e) => {
    e.addEventListener('click', (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    })
})