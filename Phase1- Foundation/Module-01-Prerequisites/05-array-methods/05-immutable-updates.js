const todo = [
  { id: 1, task: "Learn React", completed: false },
  { id: 2, task: "Learn Redux", completed: false },
  { id: 3, task: "Learn React Router", completed: true },
];
// crud operations
// create

function addTodo(todo, newTodo) {
  return [...todo, newTodo];
}
const newTodo = { id: 4, task: "Learn Node.js", completed: true };
console.log("create:", addTodo(todo, newTodo));

// update

function updateTodo(todo, updateTodo) {
  return todo.map((todo) =>
    todo.id === updateTodo.id ? { ...todo, ...updateTodo } : todo,
  );
}
console.log(
  updateTodo(todo, { id: 2, task: "Learn Angular", completed: true }),
);

// delete

function deleteTodo(todo, deleteTodo) {
  return todo.filter((e) => e.id !== deleteTodo);
}
console.log(deleteTodo(todo, 1));

// find

function findTodo(todo, todoId) {
  return todo.find((e) => e.id === todoId);
}

console.log(findTodo(todo, 2));
