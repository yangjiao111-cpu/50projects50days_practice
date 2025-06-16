const APIURL = 'https://api.github.com/users/'
const search = document.querySelector('.search')
const card = document.querySelector('.card')
const form = document.querySelector('#form')
const main = document.querySelector('.main')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const query = search.value
    if (query) {
        getUserInfo(query)
        search.value = ``
    }
})

async function getUserInfo(query) {
    try {
        const res = await fetch(APIURL + query)
        if (!res.ok) {
            const error = new Error(`HTTP Error:${res.status}`)
            error.respose = res
            throw error
        }
        const data = await res.json()
        createCard(data)
    } catch (e) {
        if (e.respose.status === 404) {
            createErrorCard('No profile with this username')
        }
    }
}

function createCard(data) {
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="">
                </div>
                <div class="user-info">
                    <h2 id="name">${data.name}</h2>
                    <p>${data.bio}</p>
                    <ul>
                        <li>${data.followers}<strong>Followers</strong></li>
                        <li>${data.following}<strong>Following</strong></li>
                        <li>${data.public_repos}<strong>Repos</strong></li>
                    </ul>
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}