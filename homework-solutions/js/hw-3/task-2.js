/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 6
let nn = String(n) + String(n)
let nnn = String(n) + String(n) + String(n)

let result = Number(n) + Number(nn) + Number(nnn);
console.log(result)

