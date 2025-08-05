/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';

const vowels = 'aeiouAEIOU';

let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase()

if (vowels.includes(letter)) {
    vowelsCount++
} else if (letter >= 'a' && letter <= 'z') {
    consonantsCount++;
}
}
 
let vowelsAndConsonantsResult = `hello contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
console.log(vowelsAndConsonantsResult)

export { vowelsAndConsonantsResult };
