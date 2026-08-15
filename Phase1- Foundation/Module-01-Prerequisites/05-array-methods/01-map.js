//Map

const numbers = [1, 2, 3, 4, 5];
const res = numbers.map((num, index, arr) => {
  return `Index:${index},Value:${num}, Array:${arr}`;
});

console.log(res);

//basic transformation

const result = numbers.map((num) => num * num);
console.log(result);

// transformation array object

const user = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userName = user.map((user) => user.name.toUpperCase());
console.log(userName);

// list items

const listItems = numbers.map((num) => `<li>${num}</li>`);
console.log(listItems);

//forEach vs map

const resForEach = numbers.forEach((num) => num * num);
console.log(resForEach);
