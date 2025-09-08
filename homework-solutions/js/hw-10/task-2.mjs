/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/


function countOccurrences(arr) {
  const countObj = {};

  arr.forEach(num => {
    if(countObj[num]) {
      countObj[num]++
    } else {
      countObj[num] = 1;
    }
  });

  return countObj;
}

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
const result = countOccurrences(numbers);

console.log(result);

export { countOccurrences };
