const input = document.querySelector('input')
const output = document.querySelector('output')
let span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "iridocyclitis",
]

let randomizeWord = ''
let maskedWord = ''
span.textContent = 0

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizeWord = words[random]
    maskedWord = "*".repeat(randomizeWord.length)
    console.log(randomizeWord)
    output.innerHTML = maskedWord
}

const win = () => {
    alert (`you have guessed right, the word is ${randomizeWord}.`)
    newGame()
}

const replaceFoundCharts = (guess) => {
    for (let i = 0;i<randomizeWord.length;i++) {
        const char = randomizeWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML =maskedWord
}



newGame()

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

    const guess = input.value
    if (guess.toLowerCase() === randomizeWord.toLowerCase()) {

        win()
    } else if (guess.length === 1) {
        replaceFoundCharts(guess)
        span.textContent++

        if (maskedWord.toLocaleLowerCase() === randomizeWord.toLocaleLowerCase()) {
        win()
        }
    } else {
        alert ("You guessed wrong")
        span.textContent++
    }
   input.value = ''
 }      
})