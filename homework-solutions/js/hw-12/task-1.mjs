// Task 1.1

function delayTwoSeconds(callback) {
    setTimeout(() => callback(), 2000)
}

delayTwoSeconds(() => {
  console.log('Callback via two sekond')
})

// Task 1.2

const newPromise = new Promise((resolve, reject) => {
  resolve(1);
});

newPromise.then((result) => console.log(result));

// Task 1.3

const promise_1 = new Promise ((resolve, reject) => {
    reject('Promise failed')
})

promise_1.catch((result) => {
    console.log(result)
})

// Task 1.4

function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}

promiseNumber(3)
.then((result) => console.log(result));

// Task 1.5

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((result) => {
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])
    })
    .catch((error) => {
        console.error(error); 
       });

// Task 1.6

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((results) => {
    results.forEach((result, index) => {
      console.log(`Прогресс промиса ${index + 1}:`);
      console.log("Статус:", result.status);
      if (result.status === "fulfilled") {
        console.log("Результат:", result.value);
      } else {
        console.log("Причина:", result.reason);
      }
    });
  }
);

// Task 1.7.1

async function processPromises() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2),promiseNumber(3)]);
    results.forEach((result, index) => {
      console.log(`Promis result ${index + 1}:`, result);
    });
  } catch (error) {
    console.error("Error with promisess", error);
  }
}

processPromises();

// Task 1.7.2


async function allSetPromises() {
  try {
    const [promiseNumber1, promiseNumber2, promiseNumber3] = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);

    console.log(promiseNumber1);
    console.log(promiseNumber2);
    console.log(promiseNumber3);
  } catch (error) {
    console.error(error);
  }
}

allSetPromises();

