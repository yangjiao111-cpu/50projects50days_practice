const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// const btns = document.querySelectorAll('.btn')
// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const id = e.target.innerText
//         const audio = document.querySelector(`#${id}`)
//         stopSong()
//         audio.play()
//     })
// })
sounds.forEach(sound => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerText = sound
    button.addEventListener('click', () => {
        stopSong()
        document.querySelector(`#${sound}`).play()
    })
    document.querySelector('.container').appendChild(button)
})
function stopSong() {
    sounds.forEach(sound => {
        const song = document.querySelector(`#${sound}`)
        song.pause()
        song.currentTime = 0
    })
}