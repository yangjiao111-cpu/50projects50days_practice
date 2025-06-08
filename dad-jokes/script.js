// https://icanhazdadjoke.com
const jokeBtn = document.querySelector('#jokeBtn')
const joke = document.querySelector('.joke')
const url = 'https://icanhazdadjoke.com'
jokeBtn.addEventListener('click', () => {
    getJoke()
})
getJoke()
async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch(url, config)
    const data = await res.json()
    joke.innerText = data.joke
}