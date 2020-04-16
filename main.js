class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() {
        this.todos.push('Novo Todo');
        console.log(this.todos)
    }
}