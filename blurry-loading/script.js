let loading = 0;
const loadingText = document.querySelector('.loading-text');
const img = document.querySelector('section');
let timerId = setInterval(() => {
    loading++;
    loadingText.innerText = `${loading}%`
    loadingText.style.opacity = scale(loading, 0, 100, 1, 0)
    img.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
    if (loading > 99) {
        clearInterval(timerId)
        return
    }
}, 30)
function scale(loading, in_min, in_max, out_max, out_min) {
    const res = out_max - (loading - in_min) / (in_max - in_min) * (out_max - out_min)
    return res;
}