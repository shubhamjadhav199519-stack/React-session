//Default parameter
function multiply(a, b) {
  console.log({ a, b });
  return a * b;
}
console.log(multiply(5, 6));

//rest params

function sum(...numbers) {
  console.log("numbers:", numbers);
  return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3, 4));

function greet(greeting, name, ...names) {
  return `${greeting} ${name} ${names.join(", ")}`;
}
console.log(greet("hello", "good morning", "Bob", "charlie", "alice"));
