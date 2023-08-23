import { createElement } from "../../createElement";

function renderFolderElement(folder, parent) {
    const folderContainer = createElement("div", { class: "folderContainer", id: `` }, "");
    const folderTitle = createElement("p", { class: "folderTitle" }, `${folder.name}`);

    folderContainer.append(folderTitle);
    parent.append(folderContainer);
}

export default renderFolderElement;
