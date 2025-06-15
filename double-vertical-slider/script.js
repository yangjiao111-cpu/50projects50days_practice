const downBtn = document.querySelector('.down-btn')
const upBtn = document.querySelector('.up-btn')
const img = document.querySelectorAll('.right-side .img')
const leftSide = document.querySelector('.left-side')
const rightSide = document.querySelector('.right-side')
let leftCnt = img.length - 1
let rightCnt = 0
downBtn.addEventListener('click', () => {
    downHandler()
    update()
})
upBtn.addEventListener('click', () => {
    upHandler()
    update()
})
update()
function upHandler() {
    leftCnt--
    rightCnt++
    if (leftCnt < 0 || rightCnt == img.length) {
        leftCnt = img.length - 1
        rightCnt = 0
    }
}
function downHandler() {
    leftCnt++
    rightCnt--
    if (leftCnt == img.length || rightCnt < 0) {
        leftCnt = 0
        rightCnt = img.length - 1
    }
}

function update() {
    leftSide.style.transform = `translateY(${-100 * leftCnt}vh)`
    rightSide.style.transform = `translateY(${-100 * rightCnt}vh)`
}