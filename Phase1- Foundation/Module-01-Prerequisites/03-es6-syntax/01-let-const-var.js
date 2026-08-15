function testScope() {
  if (true) {
    let localVar = "Iam local to this block";
    console.log(localVar);
  }
  //   return localVar;
}
testScope();

var x = 1;
console.log(x);
console.log(window.x);
