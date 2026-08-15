const order = [
  { id: 1, name: "laptop", price: 1000, quantity: 2, status: "paid" },
  { id: 2, name: "phone", price: 500, quantity: 1, status: "pending" },
  { id: 3, name: "tablet", price: 300, quantity: 3, status: "paid" },
  { id: 4, name: "monitor", price: 200, quantity: 1, status: "pending" },
];

const totalPaid = order
  .filter((item) => item.status === "paid")
  .reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
console.log(totalPaid);
