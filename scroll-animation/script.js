const contents = document.querySelectorAll('.container div')
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top
        if (contentTop < triggerBottom) content.classList.add('show')
        else content.classList.remove('show')
    })
}