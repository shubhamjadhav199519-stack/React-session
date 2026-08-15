const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
  { id: 1, name: "laptop", price: 1000, instock: true },
  { id: 2, name: "phone", price: 500, instock: false },
  { id: 3, name: "tablet", price: 300, instock: true },
  { id: 4, name: "monitor", price: 200, instock: true },
];

//filter
const test = numbers.filter((num) => console.log(num % 2 === 0));

console.log(
  "filter even numbers:",
  numbers.filter((num) => num % 2 === 0),
);

console.log(products.filter((products) => products.instock));

//find
console.log(numbers.find((num) => num % 2 === 0));
console.log(products.find((product) => product.price > 100));

// find index
console.log(numbers.findIndex((num) => num % 2 === 0));
console.log(products.findIndex((product) => product.price > 100));

// Some
console.log(numbers.some((num) => num % 2 === 0));
console.log(products.some((products) => products.price > 100));

// every

console.log(numbers.every((num) => num % 2 === 0));
console.log(products.every((products) => products.price > 100));
