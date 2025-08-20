/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(... arr) {
  return arr.flat()
}
console.log(mergeArrays([1,2], [3,4], [5,6]))

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  sentence = sentence.trim()
  const words = sentence.split(' ').filter(word => word !== '')

  if (words.length === 0) {
  return '';
  }

  words[0] = words[0].toLowerCase()

  for(let i = 1; i < words.length; i++) {
     if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
}
return words.join('_')
}

console.log(devideBy('I am super engineer'))

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if(n === 0) return 0
  if(n === 1) return 1

  let a = 0
  let b = 1
  let result

  for (let i = 2; i <= n; i++) {
    result = a + b
    a = b
    b = result
  }
  return result
}

console.log(fibonacci(8))

export { mergeArrays, fibonacci, devideBy };
