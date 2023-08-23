import { removeChildren } from "../../clearParent";
import { createElement } from "../../createElement";
import renderTodoItems from "../../todoElement/renderTodoItems";

function renderFolderElement(folder, parent, todoArray, todoParent) {
    const folderContainer = createElement("div", { class: "folderContainer" }, "");
    const folderTitle = createElement("p", { class: "folderTitle" }, `${folder.name}`);
    folderTitle.addEventListener("click", () => {
        todoArray.length = 0;
        todoArray.push(...folder.items);
        removeChildren(todoParent);
        renderTodoItems(todoParent, todoArray);
        const folderSelected = new CustomEvent("folderSelected", { detail: folder });
        window.dispatchEvent(folderSelected);
    });

    folderContainer.append(folderTitle);
    parent.append(folderContainer);
}

export default renderFolderElement;
