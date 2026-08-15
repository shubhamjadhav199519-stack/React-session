const rgb = [255, 200, 0];
console.log(rgb[0]);
console.log(rgb[2]);

// Basic array destructuring

// const [red, green, blue] = rgb;
// console.log("red", red);
// console.log("green", green);

//skip elements

// const [, , blue] = rgb;
// console.log("blue:", blue);

// Rest

// const [red, ...otherColors] = rgb;
// console.log("red:", red);
// console.log("otherColor:", otherColors);

// Default

const [red, green, blue, alpha = 1] = rgb;
console.log("alpha:", alpha);

//swapping values

let a = 1;
let b = 2;
console.log("before:", a, b);

[a, b] = [b, a];

console.log("after:", a, b);
