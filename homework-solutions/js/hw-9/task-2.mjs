// /*
//  1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//      Объект должен иметь поля name (string) и age (number)
//  2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
//  3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
//  4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
//  5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
//  */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

// Task 1

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error ('Invalid input')
  }
  characters.push(character)
//	return ([...characters, character])
  }

const updatedCharacter = addCharacter({name: 'Tom', age: 28});
console.log(updatedCharacter);

// Task 2

function getCharacter(name) {
	return characters.find(character => character.name === name);
  }

const character = getCharacter('Fred');
console.log(character);

//Task 3

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number' || isNaN (minAge)) {
    throw new Error ('Invalid input')
  }
	return characters.filter(character => character.age >= minAge);
  }

const result = getCharactersByAge(40);  
console.log(result);

//Task 4

function updateCharacter(name, newCharacter) {
	const character = getCharacter (name);

if (!character) {
  throw new Error (`Character not found.`)
}

if (newCharacter.name !== undefined) {
	character.name = newCharacter.name;
}
if (newCharacter.age !== undefined) {
	character.age = newCharacter.age;
}
console.log(`Character updated.`);
} 


// Task 5

function removeCharacter(name) {
 const index = characters.findIndex(character => character.name === name)

 if (index === -1) {
  throw new Error (`Character not found`)
 }

  characters.splice(index, 1);
  console.log(`Character removed`);
 }  

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
