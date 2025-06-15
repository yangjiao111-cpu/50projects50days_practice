const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 300) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})