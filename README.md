# Baudot
Simply encode or decode strings in javascript

## Usage
### HTML:
```javascript
<script src="baudot.js"></script>
```

### JavaScript:
```javascript
const message = "“Victory needs no explanation, defeat allows none.”"
const encoded_message = encode(message)
const decoded_message = decode(encoded_message)
```

### Custom combinations:
Requerements: 
- letters and numbers objects
- 'switch' value in both of them
- non repeatable 5-digit binary keys

```javascript
 const custom_combinations = {
            letters: {
                '00100': 'S', '00110': '/', '00010': 'J', '00011': 'B',
                '00111': 'U', '00101': 'O', '00001': 'Y', '01001': 'I',
                '01101': 'L', '01111': 'K', '01011': 'E', '01010': 'G',
                '01110': 'H', '01100': 'F', '01000': 'switch', '11000': '*',
                '11100': 'R', '11110': 'C', '11010': 'M', '11011': 'N',
                '11111': 'P', '11101': 'Q', '11001': 'D', '10001': 'Z',
                '10101': 'T', '10111': 'V', '10011': 'W', '10010': 'X',
                '10110': 'A', '10100': '-', '10000': ' ', '00000': ''
            },
            numbers: {
                '00100': '5', '00110': '2', '00010': '3', '00011': '4',
                '00111': '?', '00101': '1', '00001': '7', '01001': '8',
                '01101': '6', '01111': '9', '01011': '0', '01010': '=',
                '01110': ')', '01100': '(', '01000': ' ', '11000': '*',
                '11100': '.', '11110': ':', '11010': '"', '11011': "'",
                '11111': ',', '11101': '`', '11001': ';', '10001': '“',
                '10101': '!', '10111': '”', '10011': '&', '10010': '$',
                '10110': '#', '10100': '%', '10000': 'switch', '00000': ''
            }
        }

const message = "“Victory needs no explanation, defeat allows none.”"
const encoded_message = encode(message, custom_combinations)
const decoded_message = decode(encoded_message, custom_combinations)
```
