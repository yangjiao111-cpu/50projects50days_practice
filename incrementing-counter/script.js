// 我的写法
const counts = document.querySelectorAll('.count')
counts.forEach(count => {
    const target = count.dataset.target
    console.log(target);

    let number = 0
    let timerId = setInterval(() => {
        number += Math.ceil(target / 100)
        if (number < target) count.innerText = number
        else count.innerText = target
    }, 10)
    setTimeout(() => {
        clearInterval(timerId)
    }, 1000)
})
// 原写法
// const counters = document.querySelectorAll('.count')

// counters.forEach(counter => {
//     counter.innerText = '0'

//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target')
//         const c = +counter.innerText

//         const increment = target / 200

//         if (c < target) {
//             counter.innerText = `${Math.ceil(c + increment)}`
//             setTimeout(updateCounter, 1)
//         } else {
//             counter.innerText = target
//         }
//     }

//     updateCounter()
// })