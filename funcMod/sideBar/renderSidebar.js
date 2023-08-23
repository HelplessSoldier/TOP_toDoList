import { removeChildren } from "../clearParent";
import { createElement } from "../createElement";
import renderFolderElement from "./newFolderDialogue/renderFolderElement";

function renderSidebar(parent, folderArray, todoArray, todoParent) {
    const sidebarContainer = createElement("div", { id: "sidebarContainer" }, "");

    const sideTitleContainer = createElement("div", { id: "sideTitleContainer" }, "");
    const sideTitle = createElement("h3", { id: "sideTitle" }, "Folders:");
    const newFolderButton = createElement("button", { id: "newFolderButton" }, "New");
    newFolderButton.addEventListener("click", () => {
        const newFolderEvent = new CustomEvent("newFolderButtonPressed");
        window.dispatchEvent(newFolderEvent);
    });

    const folderContainer = createElement("div", { class: "folderContainer" }, "");

    if (folderArray) {
        removeChildren(folderContainer);
        for (let folder of folderArray) {
            renderFolderElement(folder, folderContainer, todoArray, todoParent);
        }
    }

    sideTitleContainer.append(sideTitle, newFolderButton);
    sidebarContainer.append(sideTitleContainer, folderContainer);
    parent.append(sidebarContainer);
}

export default renderSidebar;
