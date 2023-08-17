import TodoItem from "./todoItem"

function createNewTodoItem( array, title, description, dueDate, priority ) {
    const item = new TodoItem(title, description, dueDate, priority);
    array.push(item);
}

export default createNewTodoItem;