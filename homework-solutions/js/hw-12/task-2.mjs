
const url = "https://jsonplaceholder.typicode.com/todos";

async function getDataFromApi(todo) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 201) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Get data from API:", data);

    for (let key in todo) {
      if (todo[key] !== data[key]) {
        throw new Error(
          `Mismatch in key "${key}". Expected: ${todo[key]}, but got: ${data[key]}`
        );
      }
    }

    return data;

  } catch (error) {
    console.error("ErrorText:", error.message);
  }
}

getDataFromApi({
  userId: 1,
  title: "This is the first test",
  completed: false,
});

