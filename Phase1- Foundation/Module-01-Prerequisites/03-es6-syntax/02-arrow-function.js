//Traditional function

function add1(a, b) {
  return a + b;
}
console.log("add1:", add1(2, 3));

//arrow function
const add2 = (a, b) => {
  return a + b;
};
console.log("add2", add2(3, 4));

//implicit return

const add3 = (a, b) => a + b;
console.log("add3", add3(10, 20));

//explicit return

const add4 = (a, b) => {
  a = a + 10;
  b = b + 10;

  return a + b;
};
console.log("add4", add4(5, 6));

const user = () => ({ fname: "shubham", active: true });
console.log("user", user());

const counter = {
  count: 0,
  increamentNormal() {
    setTimeout(function () {
      this.count++;
      console.log("increamentNormal", this.count);
      console.log("increamentNormalthis", this);
    }, 0);
  },
  increamentarrow() {
    setTimeout(() => {
      this.count++;
      console.log("increamentarrow:", this.count);
      console.log("increamentarrowthis:", this);
    }, 0);
  },
};

console.log(counter.increamentNormal());
console.log(counter.increamentarrow());
