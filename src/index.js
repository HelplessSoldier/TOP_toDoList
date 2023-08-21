import renderTodoItems from "../funcMod/todoElement/renderTodoItems";
import renderTopBar from "../funcMod/sideBar/sideBar";
import TodoItem from "../funcMod/todoElement/todoItem";
import { createElement } from "../funcMod/createElement";
import { removeChildren } from "../funcMod/clearParent";
import { getTodoArrayFromLocalStorage } from "../funcMod/getTodoArrayFromLocalStorage";
import { updateLocalStorage } from "../funcMod/updateLocalStorage";
import { editItemDialogue } from "../funcMod/editItemDialogue";
import  "./style.css";

const editPopup = document.getElementById('editOverlay');
const rootElement = document.getElementById('content');
const todoContainer = createElement('div', { id: 'todoContainer' }, '');
rootElement.append(todoContainer);

// get todo array data from local storage then add each as a todo object to todoArray
let todoArrayJson = getTodoArrayFromLocalStorage();
let todoArray = [];
for (let item of todoArrayJson) {
    todoArray.push(new TodoItem(item.title, item.description, item.dueDate, item.priority, item.id));
}

// place everything on screen
renderTopBar(todoContainer, rootElement, todoArray);
renderTodoItems(todoContainer, todoArray);

// remove todo item from array and local storage, then update Dom
window.addEventListener('removeTodoItem', (e) => {
    let id = e.detail;
    for (let item of todoArray) {
        if (item.id === id) {
            todoArray.splice(todoArray.indexOf(item), 1);
            break;
        }
    }
    removeChildren(todoContainer);
    updateLocalStorage(todoArray);
    renderTodoItems(todoContainer, todoArray);
})

// open edit item dialogue when edit button is pressed
window.addEventListener('editTodoItem', (e) => {
    let selectedItem = e.detail;
    let itemToEdit;
    for (let item of todoArray) {
        if (item.id === selectedItem) {
            itemToEdit = item;
            console.log(itemToEdit)
            break;
        }
    }
    editItemDialogue( itemToEdit, editPopup );
})

// update todo items when requested
window.addEventListener('updateEvent', () => {
    removeChildren(todoContainer);
    updateLocalStorage(todoArray);
    renderTodoItems(todoContainer, todoArray);
})
