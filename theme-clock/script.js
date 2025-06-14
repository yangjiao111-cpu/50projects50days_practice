const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
toggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
        toggle.innerHTML = 'Dark mode'
    } else {
        body.classList.add('dark')
        toggle.innerHTML = 'Light mode'
    }
})

function setTime() {
    //设置时间
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML = `${hours % 12}:${minutes >= 10 ? minutes : '0' + minutes} ${hours > 12 ? 'PM' : 'AM'}`
    //设置日期
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    dateEl.innerHTML = `
        ${days[day]}, ${months[month]}
        <span class="circle">${date}</span>
    `
    //指针转动
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours % 12, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
}
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
setTime()
setInterval(setTime, 1000)