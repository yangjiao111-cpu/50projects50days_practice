const cards = document.querySelectorAll('.card-box li')
cards.forEach((e) => {
    e.addEventListener('click', (e) => {
        document.querySelector('.active').className = "";
        e.target.className = "active";
    })
})