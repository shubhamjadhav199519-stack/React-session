function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id, name: "John" }), 1000);
  });
}

// async function loadUser(id) {
//   try {
//     const user = await getUser(id);
//     console.log("User:", user);
//   } catch (err) {
//     console.log("error:", err);
//   } finally {
//     console.log("done");
//   }
// }
// loadUser(1);

const loadUser = async (id) => {
  try {
    const user = await getUser(id);
    console.log("user:", user);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("done");
  }
};
loadUser(1);
