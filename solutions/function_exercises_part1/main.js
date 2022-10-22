// Exercise 1
// Wypisz wartości od 1 do 100 (dokładnie w takiej kolejności)
// for (let i = 100; i > 0; i--) {
// code here
// }

// Solution Exercise 1:
const writeNumbersInOrder = () => {
    for (let i = 100; i > 0; i--) {
        console.log(100 - i + 1)
    }
}
// writeNumbersInOrder()


// Exercise 2
// Wypisz słowa podanego stringa w odwrotnej kolejności:
// sample input: 'Ala ma kota'
// sample output: 'kota ma Ala'
// function reverseSentence(text) {
// code here
// }

// Solution Exercise 2:
const inputText = 'Ala ma kota'
const reverseText = (text) => {
    const splitedText = text.split(' ')
    splitedText.reverse();
    let result = '';
    splitedText.forEach(el => result += ' ' + el);
    console.log(result)
    return result.trim()
}

// reverseText(inputText)


// Exercise 3
// Wypisz podany tekst w postaci pojedynych znaków, w ten sposób,
// aby nieparzyste litery zapisane były małą literą, a parzyste dużą.
// Np. Hello wyświetl jako:
// h
// E
// l
// L
// o

// Solution Exercise 3:
let crazyText = 'beleza'
const getSnakeText = (sampleText) => {
    for (i = 0; i < sampleText.length; i++) {
        if (i % 2 === 0) {
            console.log(sampleText[i].toUpperCase())
        } else {
            console.log(sampleText[i].toLowerCase())
        }
    }
}

// getSnakeText(crazyText)


