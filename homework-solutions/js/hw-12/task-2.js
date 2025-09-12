const todobody = {
  userId: 198,
  title: 'quis eius est sint explicabo',
  completed: true,
};

async function createTodo(todobody) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todobody),
    });

    if (response.status !== 201) {
      throw new Error('Request failed');
    }

    const responseData = await response.json();

    if (responseData.id !== 201) {
      throw new Error('ID does not match 201');
    }
    return responseData;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    console.log('Function completed');
  }
}

createTodo(todobody).then((responseData) => {
  if (responseData) {
    console.log('Created Todo:', responseData);
  }
});
