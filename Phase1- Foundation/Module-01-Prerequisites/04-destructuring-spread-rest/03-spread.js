//Array

//combine

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(...arr1, ...arr2);

//copy

const arr3 = [...arr1];
console.log(arr3);

//insert

const arr4 = [0, ...arr1, 8];
console.log(arr4);

//Objects

//combine

const obj1 = { name: "John" };
const obj2 = { age: 30 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//copy

const obj4 = { ...obj1 };
console.log(obj4);

//insert

const user = { name: "John" };
const userWithAge = { ...user, age: 25 };
console.log(userWithAge);
