class TodoClass {
    constructor(){
        this.todoList=[];
    }

    //metodos para getionar las tareas
    list(){
        return this.todoList
    }

    add(title){
        const newTask = {
            title,
            completed:false
        };
        this.todoList.push(newTask)
    };

    complete(title){
        if(!this.todoList.length){
            throw new Error("No hay tareas")
        }
        const todoFound = this.todoList.find(todo=>todo.title === title);
        if(!todoFound){
            throw new Error("No se encontro la tarea")
        }
        todoFound.completed = true;
        return "Tarea completada"
    }
}
export {TodoClass}