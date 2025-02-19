/*

- Создайте переменную salary со значением 1000
- Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше

*/

//Вариант 1

let salary = 1000;
let grade = salary >= 1000 ? 'middle' : 'junior';

console.log(grade);

//Вариант 2

let salary1 = 1000;
let grade1;

if(salary1 >= 1000) {
    grade1 = 'middle';
} else {
    grade1 = 'junior';
}

console.log(grade1);
