import renderTodoItems from "../funcMod/todoElement/renderTodoItems";
import renderSideBar from "../funcMod/sideBar/sideBar";

const rootElement = document.getElementById('content');
let todoArray = [];

renderSideBar(rootElement, todoArray);
renderTodoItems(rootElement, todoArray);


