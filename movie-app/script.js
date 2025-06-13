const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const main = document.querySelector('.main')
const search = document.querySelector('.search')
const form = document.querySelector('form')
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}
function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach(e => {
        const div = document.createElement('div')
        div.classList.add('movie')
        div.dataset.id = e.id
        div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w1280${e.poster_path}" alt="">
            <div class="movie-info">
                <h3>${e.title}</h3>
                <span class="${getClassByVote(e.vote_average)}">${e.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${e.overview}
            </div>
        `
        main.appendChild(div)
    })
}
function getClassByVote(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const keyword = search.value
    if (keyword && keyword !== '') {
        getMovies(SEARCH_API + keyword)
        search.value = ''
    } else {
        window.location.reload()
    }
})