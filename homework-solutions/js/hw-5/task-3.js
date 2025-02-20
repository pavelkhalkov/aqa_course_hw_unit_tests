/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';

let vowelsAndConsonantsResult = '';

let vowels = 0;
let consonants = 0;

const vowelsList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

for (let i = 0; i < word.length; i++) {
  let letter = word[i];

  if(letter.toLowerCase() !== letter.toUpperCase()) {
  if(vowelsList.includes(letter)) {
     vowels ++ 
  } else {
    consonants ++ 
  };
 };
};

vowelsAndConsonantsResult = `hello contains ${vowels} vowels and ${consonants} consonants`;

console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
