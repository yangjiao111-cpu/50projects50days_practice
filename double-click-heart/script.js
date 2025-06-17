const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
let cnt = 0
let lastClickTime = null
let loveTime = 0
loveMe.addEventListener('click', (e) => {
    const nowTime = new Date()
    if (nowTime - lastClickTime > 500) {
        cnt = 0
    }
    cnt = cnt + 1
    if (cnt == 2) {
        showLove(e)
        cnt = 0
    }
    lastClickTime = new Date()
})

function showLove(e) {
    loveTime++
    times.innerHTML = loveTime

    console.log('I Love You');
    const love = document.createElement('i')
    love.classList.add('fas')
    love.classList.add('fa-heart')

    const clientX = e.clientX
    const clientY = e.clientY

    const xInside = clientX - e.target.offsetLeft
    const yInside = clientY - e.target.offsetTop

    love.style.left = `${xInside}px`
    love.style.top = `${yInside}px`

    loveMe.appendChild(love)
    setTimeout(() => {
        love.remove()
    }, 600)

}