import createNewTodoItem from "../funcMod/todoElement/newTodoItem";
import renderTodoItems from "../funcMod/todoElement/renderTodoItems";
import renderSideBar from "../funcMod/sideBar/sideBar";

const rootElement = document.getElementById('content');
let todoArray = [];

renderSideBar(rootElement, todoArray);
createNewTodoItem(todoArray, 'title0', 'desc0', 'due0', 'pri0');
renderTodoItems(todoArray, rootElement);


