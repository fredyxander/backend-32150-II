import { TodoClass } from "./todosClass.js";

const todos = new TodoClass();

console.log(todos.list());

todos.add("One task");
todos.add("Two task");

console.log(todos.list());

todos.complete("Two task");

console.log(todos.list());