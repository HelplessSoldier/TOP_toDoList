import { removeChildren } from "../../clearParent";
import { createElement } from "../../createElement";
import Folder from "../folder";

function renderNewFolderDialogue(newFolderParent, folderArray) {
    removeChildren(newFolderParent);

    const newFolderContainer = createElement("div", { id: "newFolderContainer" }, "");

    // folder name input field
    const folderInputContainer = createElement("div", { id: "folderInputContainer" }, "");
    const newFolderLabel = createElement("label", { for: "newFolderInput" }, "Name: ");
    const newFolderName = createElement("input", { type: "text", id: "newFolderInput" }, "");
    const submitFolderButton = createElement("button", { id: "submitFolderButton" }, "Submit");
    submitFolderButton.addEventListener("click", () => {
        if (newFolderName.value) {
            // create folder and add to the folder array
            const newFolder = new Folder(newFolderName.value);
            folderArray.push(newFolder);

            // send folderCreated to window on submit
            const folderCreatedEvent = new CustomEvent("folderCreated");
            window.dispatchEvent(folderCreatedEvent);

            // clear field and hide popup
            newFolderParent.style.display = "none";
            newFolderName.value = "";
        }
    });
    const cancelButton = createElement("button", { id: "folderCancelButton" }, "Close");
    cancelButton.addEventListener("click", () => {
        newFolderParent.style.display = "none";
    });

    folderInputContainer.append(newFolderLabel, newFolderName, submitFolderButton, cancelButton);
    newFolderContainer.append(folderInputContainer);
    newFolderParent.append(newFolderContainer);
    newFolderParent.style.display = "block";
}

export default renderNewFolderDialogue;
