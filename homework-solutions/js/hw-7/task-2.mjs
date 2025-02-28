/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {

    if (typeof word !== 'string') {
        console.log('Input must be a string');
        return false; 
    }

    let result = word.toLowerCase();
    return result === result.split('').reverse().join('');
}

console.log(isPalindrom('Abba'));


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {

    if (typeof sentence !== 'string' || !sentence.trim()) {
        return [];
    }

    const words = sentence.split(/\s+/);

    const maxLength = Math.max(... words.map(word => word.length));
    const longestWords = words.filter(word => word.length === maxLength);
    return longestWords;
 }
 
 console.log(findLongestWords('This is my first page'));

export { isPalindrom, findLongestWords };
