import TodoItem from "./todoItem"
import { updateLocalStorage } from "../updateLocalStorage";

function createNewTodoItem( array, title, description, dueDate, priority ) {
    const item = new TodoItem(title, description, dueDate, priority);
    array.push(item);
    updateLocalStorage(array);
}

export default createNewTodoItem;