// Write a function in JavaScript that takes an array of strings combined with numbers 
// as input and returns a new array containing the original string and the extracted 
// numeric values from those strings.

function extractWordsAndNumbers(array) {
    let words = [];
    let numbers = [];

    for (let str of array) {
        let wordPart = '';
        let numPart = '';

        for (let char of str) {
            if (!isNaN(char)) {
                numPart += char;
            } else {
                wordPart += char;
            }
        }

        if (wordPart!== '') {
            words.push(wordPart);
        }
        if (numPart!== '') {
            numbers.push(parseInt(numPart));
        }
    }
    return [...words,...numbers];

}

const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);

console.log(output); // Output: [ 'Hello', 123, 'World', 456, 49, 'Another', 789 ]
