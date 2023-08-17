import renderTodoItems from "../funcMod/todoElement/renderTodoItems";
import renderSideBar from "../funcMod/sideBar/sideBar";
import { createElement } from "../funcMod/createElement";
import { removeChildren } from "../funcMod/clearParent";
import  "./style.css";

const rootElement = document.getElementById('content');
const todoContainer = createElement('div', { id: 'todoContainer' }, '');
rootElement.append(todoContainer);

let todoArray = [];

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
})
