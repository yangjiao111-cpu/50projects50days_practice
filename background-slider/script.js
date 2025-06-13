const left = document.querySelector('#left')
const right = document.querySelector('#right')
const slide = document.querySelectorAll('.slide')
const body = document.querySelector('body')
let active = 0
left.addEventListener('click', () => {
    active = (active - 1) < 0 ? slide.length - 1 : active - 1
    update()
})
right.addEventListener('click', () => {
    active = (active + 1) % slide.length
    update()
})
update()
function update() {
    slide.forEach((e, i) => {
        if (i == active) {
            e.classList.add('active')
            body.style.backgroundImage = e.style.backgroundImage
        }
        else {
            e.classList.remove('active')
        }
    })
}