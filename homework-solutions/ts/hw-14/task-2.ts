type mapCallback<T> = (element: T, index: number, array: T[]) => T;

function map<T>(array: T[], callback: mapCallback<T>): T[] {
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const callback = (element: number, index: number, array: number[]): number => {
  return element * index;
};

const result = map([1, 2, 3, 4, 5], callback);
console.log(result);
