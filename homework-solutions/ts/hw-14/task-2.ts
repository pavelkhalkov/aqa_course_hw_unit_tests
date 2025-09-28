type mapCallback<T, U> = (element: T, index: number, array: T[]) => U;

function map<T, U>(array: T[], callback: mapCallback<T, U>): U[] {
  const result: U[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const result = map([1, 2, 3, 4, 5], (element, index) => element * index);
console.log(result);
