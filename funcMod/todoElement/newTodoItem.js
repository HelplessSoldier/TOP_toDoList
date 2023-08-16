import TodoItem from "./todoItem"

function createNewTodoItem( array, title, description, dueDate, priority ) {
    const item = new TodoItem(title, description, dueDate, priority);
    const element = item.createTodoElement();
    array.push(element);
}

export default createNewTodoItem;