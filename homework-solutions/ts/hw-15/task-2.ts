function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

const user = {
  id: 1,
  name: 'John',
  age: 35,
};

const key1 = getKeyByValue(user, 'John');
const key2 = getKeyByValue(user, 21);

console.log(key1);
console.log(key2);