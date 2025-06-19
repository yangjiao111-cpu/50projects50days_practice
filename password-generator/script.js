const showPsd = document.querySelector('.show-psd #psd')
const clipboard = document.querySelector('#clipboard')
const generateEl = document.querySelector('#generate')

// const lengthEl = document.querySelector('#length')
// const uppercaseEl = document.querySelector('#uppercase')
// const lowercaseEl = document.querySelector('#lowercase')
// const numbersEl = document.querySelector('#numbers')
// const symbolsEl = document.querySelector('#symbols')

const settings = document.querySelectorAll('.setting input')

const settingConfig = {
    length,
    uppercase,
    lowercase,
    numbers,
    symbols
}

const randomFun = {
    uppercase: getRandomUpper,
    lowercase: getRandomLower,
    numbers: getRandomNumbers,
    symbols: getRandomStmbols
}

settings.forEach((setting) => {
    changeConfig(setting)
    setting.addEventListener('change', (e) => {
        changeConfig(e.target)
    })
})

clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(showPsd.value)
    alert('已复制到剪贴板')
})

generateEl.addEventListener('click', () => {
    const psd = getPassWord()
    showPsd.value = psd
})

function getPassWord() {
    let length = settingConfig['length']
    let psd = ''
    while (length > 0) {
        let flag = 1
        for (let config in settingConfig) {
            if (settingConfig[config] === true) {
                psd += randomFun[config]()
                length--
                flag = 0
            }
        }
        if (flag) {
            alert('请至少选择一项！')
            return ''
        }
    }
    return psd.slice(0, settingConfig.length)
}
// 97 65 48
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomStmbols() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function changeConfig(e) {
    if (e.type === 'number') {
        settingConfig[e.id] = e.value
    }
    else {
        settingConfig[e.id] = e.checked
    }
}