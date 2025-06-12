const cups = document.querySelectorAll('.smallcup')
const empty = document.querySelector('.empty')
const filled = document.querySelector('.filled')
const emptySpan = document.querySelector('.text span')
const filledspan = document.querySelector('.filled span')
const emptySmall = document.querySelector('.empty small')
let selectedId = null;
cups.forEach(cup => {
    cup.addEventListener('click', e => {
        const id = e.target.dataset.id
        if (id == selectedId) selectedId = selectedId - 1
        else selectedId = id
        selectCup()
        fillWater()
    })
})
function selectCup() {
    cups.forEach((cup, index) => {
        if (index < selectedId) cup.classList.add('active')
        else cup.classList.remove('active')
    })
}
function fillWater() {
    const emptyHeight = (8 - selectedId) / 8 * 100
    const filledHeight = selectedId / 8 * 100
    empty.style.height = `${emptyHeight}%`
    filled.style.height = `${filledHeight}%`
    emptySpan.innerText = `${(2 - 0.25 * selectedId) == 0 ? '' : 2 - 0.25 * selectedId + 'L'}`
    filledspan.innerText = `${(selectedId / 8 * 100) == 0 ? '' : selectedId / 8 * 100 + '%'}`
    if (emptyHeight == 0) emptySmall.innerText = ''
    else emptySmall.innerText = 'Remained'
}