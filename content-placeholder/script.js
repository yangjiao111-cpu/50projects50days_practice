const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
const cardHeader = document.querySelector('.card-header')
const cardTitle = document.querySelector('.card-title')
const cardExcerpt = document.querySelector('.card-excerpt')
const profileImg = document.querySelector('.profile-img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')
setTimeout(getData, 2500)

function getData() {
    animated_bgs.forEach(animated_bg => {
        animated_bg.classList.remove('animated-bg')
    })
    animated_bg_texts.forEach(animated_bg_text => {
        animated_bg_text.classList.remove('animated-bg-text')
    })
    cardHeader.innerHTML = `
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">
    `
    cardTitle.innerHTML = `Lorem ipsum dolor sit amet`
    cardExcerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    name.innerHTML = `John Doe`
    date.innerHTML = `Oct 08, 2020`
}