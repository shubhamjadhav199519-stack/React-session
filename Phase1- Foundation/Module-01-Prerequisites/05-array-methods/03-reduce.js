const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, currentvalue) => {
  console.log(`Acc:${acc},currentvalue:${currentvalue}`);
  return acc + currentvalue;
}, 0);
console.log("sum of numbers:", sum);

const cart = [
  { id: 1, name: "laptop", price: 1000, quantity: 2 },
  { id: 2, name: "phone", price: 500, quantity: 1 },
  { id: 3, name: "tablet", price: 300, quantity: 3 },
];

const total = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log(total);
