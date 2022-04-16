const combinations = {
    letters: {
        '00100': 'A', '00110': '/', '00010': 'E', '00011': 'I',
        '00111': 'O', '00101': 'U', '00001': 'Y', '01001': 'B',
        '01101': 'C', '01111': 'D', '01011': 'F', '01010': 'G',
        '01110': 'H', '01100': 'J', '01000': 'switch', '11000': '*',
        '11100': 'K', '11110': 'L', '11010': 'M', '11011': 'N',
        '11111': 'P', '11101': 'Q', '11001': 'R', '10001': 'S',
        '10101': 'T', '10111': 'V', '10011': 'W', '10010': 'X',
        '10110': 'Z', '10100': '-', '10000': ' ', '00000': ''
    },
    numbers: {
        '00100': '1', '00110': '2', '00010': '3', '00011': '4',
        '00111': '?', '00101': '5', '00001': '7', '01001': '8',
        '01101': '6', '01111': '9', '01011': '0', '01010': '=',
        '01110': ')', '01100': '(', '01000': ' ', '11000': '*',
        '11100': '.', '11110': ':', '11010': '"', '11011': "'",
        '11111': ',', '11101': '`', '11001': ';', '10001': '“',
        '10101': '!', '10111': '”', '10011': '&', '10010': '$',
        '10110': '#', '10100': '%', '10000': 'switch', '00000': ''
    }
}

function encode(message, combinationsB) {
    if (combinationsB === undefined) combinationsB = combinations

    function getKeyByValue(value, isLetters) {
        return isLetters
            ? Object.keys(combinationsB.letters).find(key => combinationsB.letters[key] === value)
            : Object.keys(combinationsB.numbers).find(key => combinationsB.numbers[key] === value);
    }

    let encoded = ''
    let isLetters = true
    Array.from(message).forEach((char, index, arr) => {
        let key = getKeyByValue(char.toUpperCase(), isLetters)
        if (!key) {
            encoded += `${getKeyByValue('switch', isLetters)} `
            isLetters = !isLetters
            key = getKeyByValue(char.toUpperCase(), isLetters)
            if (!key) key = getKeyByValue('?', false)
        }
        index === arr.length - 1
            ? encoded += `${key}`
            : encoded += `${key} `
    })
    return encoded
}

function decode(message, combinationsB) {
    if (combinationsB === undefined) combinationsB = combinations

    function getValueByKey(key, isLetters) {
        return isLetters
            ? combinationsB.letters[key]
            : combinationsB.numbers[key]
    }

    let decoded = ''
    let isLetters = true
    message = message.replaceAll(/[^01]/ig, '').split(/(?<=^(?:.{5})+)(?!$)/)

    message.forEach(char => {
        let value = getValueByKey(char, isLetters)
        value === 'switch'
            ? isLetters = !isLetters
            : decoded += value
    })

    let words = []
    decoded.match(/\b\w+\b/g).forEach(word => {
        words.push(word.toLowerCase().charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    })

    words.forEach((word) => {
        decoded = decoded.replace(word.toUpperCase(), word)
    })

    return decoded
}