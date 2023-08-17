import renderTodoItems from "../funcMod/todoElement/renderTodoItems";
import renderSideBar from "../funcMod/sideBar/sideBar";
import TodoItem from "../funcMod/todoElement/todoItem";
import { createElement } from "../funcMod/createElement";
import { removeChildren } from "../funcMod/clearParent";
import { getTodoArrayFromLocalStorage } from "../funcMod/getTodoArrayFromLocalStorage";
import { updateLocalStorage } from "../funcMod/updateLocalStorage";
import  "./style.css";

const rootElement = document.getElementById('content');
const todoContainer = createElement('div', { id: 'todoContainer' }, '');
rootElement.append(todoContainer);

let todoArrayJson = getTodoArrayFromLocalStorage();

let todoArray = [];
for (let item of todoArrayJson) {
    todoArray.push(new TodoItem(item.title, item.description, item.dueDate, item.priority));
}

console.log(todoArray);

renderSideBar(todoContainer, rootElement, todoArray);
renderTodoItems(todoContainer, todoArray);

window.addEventListener('removeTodoItem', (e) => {
    let id = e.detail;
    for (let item of todoArray) {
        if (item.id === id) {
            todoArray.splice(todoArray.indexOf(item), 1);
            break;
        }
    }
    removeChildren(todoContainer);
    renderTodoItems(todoContainer, todoArray);
    updateLocalStorage(todoArray);
})
