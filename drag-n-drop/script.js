const fill = document.querySelector('.fill')
const items = document.querySelectorAll('.item')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

items.forEach(item => {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('drop', dragDrop)
})

function dragStart() {
    this.classList.add('hold')
    setTimeout(() => this.className = 'invisbility', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.classList.add('hovered')
}

function dragLeave(e) {
    e.preventDefault()
    this.classList.remove('hovered')
}
function dragDrop() {
    this.classList.remove('hovered')
    this.append(fill)
}