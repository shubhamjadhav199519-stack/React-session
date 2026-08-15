//  promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Promise successfull");
    } else {
      reject("Promise rejected");
    }
  }, 1000);
});

promise
  .then((message) => console.log("sucess:", message))
  .catch((error) => console.log(error))
  .finally(() => console.log("resolved or rejected"));
