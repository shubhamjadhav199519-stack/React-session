const user = {
  name: "shubham",
  age: 30,
  address: {
    city: "pune",
    state: "maharashtra",
    country: "india",
  },
};

console.log(user.name); //  dot notation
console.log(user["name"]); // bracket notation

// basic destructuring

const { name, age, address } = user;
console.log("Name", name);
console.log("address:", address);

//Nested destructuring

const {
  address: { city, state, country },
} = user;
console.log("city:", city);

//Rename

const { name: userName } = user;
console.log("name:", name);
console.log("Uname:", userName);

//Default values(only when the property is undefined)

const { role = "admin", verified = false } = user;
console.log("role:", role); // output: admin
console.log("verified:", verified);

//Function parameter destructuring
function displayUser({ name, age, address: { city, state, country } }) {
  return `Name: ${name}, Age: ${age}, City: ${city}, State: ${state}, Country: ${country}`;
}
console.log(displayUser(user));
