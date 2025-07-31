/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

// Вариант 1 

// let minAge = 18
// let maxAge= 60
// let age = '2'

// let ageNumber = Number(age)

// if(isNaN(ageNumber) || age === null || age === '') {
//   console.log('Incorrect data type')
// } else if (ageNumber < minAge) {
//   console.log("You don't have access cause your age is " + ageNumber + ". It's less then " + minAge)
// } else if (ageNumber >= minAge && ageNumber < maxAge) {
//   console.log("Welcome!")
// } else if(ageNumber >= maxAge) {
//   console.log("Keep calm and look Culture channel")
// } else {
//   console.log("Technical work")
// }

// Вариант 2 - добавлена обработка, когда let age = true OR false

let minAge = 18
let maxAge= 60
let age = true

let ageNumber = Number(age)

if(isNaN(ageNumber) || typeof age === 'boolean' || age === null || age === '') {
  console.log('Incorrect data type')
} else if (ageNumber < minAge) {
  console.log("You don't have access cause your age is " + ageNumber + ". It's less then " + minAge)
} else if (ageNumber >= minAge && ageNumber < maxAge) {
  console.log("Welcome!")
} else if(ageNumber >= maxAge) {
  console.log("Keep calm and look Culture channel")
} else {
  console.log("Technical work")
}

