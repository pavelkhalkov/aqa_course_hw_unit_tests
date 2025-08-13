/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }

  const cleanedStr = word.toLowerCase().replace(/\s+/g, '')
  return cleanedStr === cleanedStr.split('').reverse().join('')
 }

 console.log(isPalindrom('RACECAR'))

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
   if (typeof sentence !== 'string' || sentence.trim() === '') {
    return [];
  }
    const words = sentence.split(' ')
    const maxLength = Math.max(...words.map(el => el.length))
    return words.filter(el => el.length === maxLength )

}

console.log(findLongestWords("I am learning JavaScript")); 

export { isPalindrom, findLongestWords };
