async function fetchUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json(id);
  return data;
}

async function loadUser(id) {
  try {
    const user = await fetchUser(id);
    console.log("user:", user);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("done");
  }
}
loadUser(3);
