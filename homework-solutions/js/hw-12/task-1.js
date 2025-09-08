//Task 1.1.

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => {
  console.log('Hello my friend!');
});

//Task 1.2.
const promise_1 = new Promise((resolve, reject) => {
  resolve(1);
});

promise_1.then((result) => console.log(result));

//Task 1.3. 
const promise_2 = new Promise((resolve, reject) => {
  reject(new Error("Promise failed"));
});

promise_2.catch((error) => console.error('Error message:', error.message));

//Tasks 1.4. - 1.6. 

function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(
  (result) => {
    for (const i of result) {
      console.log(i);
    }
  }
);

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).
then((results) => {
     results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(result.status, result.value);
      } else {
        console.log(result.status, result.reason);
      }
    });
  }
);

//Task 1.7. 

async function processPromises() {
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promis ${index + 1} is fulfilled with value:`, result.value);
      } else {
        console.log(`Promis ${index + 1} is rejected with reason:`, result.reason);
      }
    });
  } catch (error) {
    console.error('Error with promisess: Something went wrong', error);
  }
}

processPromises();
