import { TodoClass } from "../todosClass.js";
import assert from "assert";

//crear las pruebas
describe("test de la clase TodoClass y sus metodos",()=>{
    it("Al crear la instancia de la clase se debe crear una lista de tareas vacia",()=>{
        const todos = new TodoClass();
        assert.strictEqual(todos.list().length, 0)
    });

    it("Al agregar una tarea, el tamano del arreglo del arreglo deberia incrementar",()=>{
        const todos = new TodoClass();
        todos.add("new task");
        assert.strictEqual(todos.list().length, 1);
        assert.deepStrictEqual(todos.list(),[
            { title: 'new task', completed: false }
        ]);
    });
});