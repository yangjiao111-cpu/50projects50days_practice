const prev = document.querySelector('.Prev');
const next = document.querySelector('.Next');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
let step = 1;
prev.addEventListener('click', () => {
    step--;
    if (step < 1) step = 1;
    update();
})
next.addEventListener('click', () => {
    step++;
    if (step > circles.length) step = circles.length;
    update();
})
function update() {
    circles.forEach((e, i) => {
        if (i < step) e.classList.add('active');
        else e.classList.remove('active');
    })
    progress.style.width = (step - 1) / (circles.length - 1) * 100 + '%';
    if (step == 1) {
        prev.disabled = true;
    } else if (step == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}