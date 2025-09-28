// Task 1.1.

function wrapInArray<T>(value: T): Array<T> {
  return [value];
}

const numberArray = wrapInArray(5);
const stringArray = wrapInArray('Hello');

console.log(numberArray);
console.log(stringArray);

//Task 1.2.

function getLastItem<T>(value: Array<T>): T | undefined {
  return value[value.length - 1];
}

console.log(getLastItem([1, 2, 3, 4]));
console.log(getLastItem(['a', 'b', 'c'])); 

// Task 1.3.

interface IPair<T, U> {
  first: T;
  second: U;
}

function describePair<T, U>(pair: IPair<T, U>): string {
  return `${pair.first} and ${pair.second}`;
}

console.log(describePair({ first: 'Alice', second: 30 })); 