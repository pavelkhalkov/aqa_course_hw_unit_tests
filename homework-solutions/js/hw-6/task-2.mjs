/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull = null;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const competitorPizzasLower = [];
const myPizzasT1Lower = [];
const myPizzasT2Lower = [];

for (let pizza of competitorPizzas) {
  competitorPizzasLower.push(pizza.toLowerCase());
}

for (let myPizza1 of myPizzasT1) {
  myPizzasT1Lower.push(myPizza1.toLowerCase());
}

for (let myPizza2 of myPizzasT2) {
  myPizzasT2Lower.push(myPizza2.toLowerCase());
}

let resultUniqueT1 = [];
let resultUniqueT2 = [];

for (let i = 0; i < myPizzasT1.length; i++) {
  if (!competitorPizzasLower.includes(myPizzasT1Lower[i])) {
    resultUniqueT1.push(myPizzasT1[i]);
  }
}

for (let i = 0; i < myPizzasT2.length; i++) {
  if (!competitorPizzasLower.includes(myPizzasT2Lower[i])) {
    resultUniqueT2.push(myPizzasT2[i])
  }
}

if (resultUniqueT1.length === 0 && resultUniqueT2.length === 0) {
  resultUnique = resultNull;  
} else {
  resultUnique = [...resultUniqueT1, ...resultUniqueT2];
  let uniqueSet = [];
  for (let pizza of resultUnique) {
    if (!uniqueSet.includes(pizza)) {
      uniqueSet.push(pizza);
    }
  }
  resultUnique = uniqueSet;
}

console.log(resultUnique);

export { resultNull, resultUnique };
