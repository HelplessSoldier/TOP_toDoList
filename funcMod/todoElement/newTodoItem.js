import TodoItem from "./todoItem"
import { updateLocalStorage } from "../updateLocalStorage";

function createNewTodoItem( array, title, description, dueDate, priority, id ) {
    const item = new TodoItem(title, description, dueDate, priority, id);
    array.push(item);
    updateLocalStorage(array);
}

export default createNewTodoItem;