import { removeChildren } from "../../clearParent";
import { createElement } from "../../createElement";

function renderNewFolderDialogue(newFolderParent) {
  removeChildren(newFolderParent);

  const newFolderContainer = createElement(
    "div",
    { id: "newFolderContainer" },
    ""
  );

  // folder name input field
  const folderInputContainer = createElement(
    "div",
    { id: "folderInputContainer" },
    ""
  );
  const newFolderLabel = createElement(
    "label",
    { for: "newFolderInput" },
    "Name: "
  );
  const newFolderName = createElement(
    "input",
    { type: "text", id: "newFolderInput" },
    ""
  );
  const submitFolderButton = createElement(
    "button",
    { id: "submitFolderButton" },
    "Submit"
  );
  const cancelButton = createElement(
    "button",
    { id: "folderCancelButton" },
    "Close"
  );
  cancelButton.addEventListener("click", () => {
    newFolderParent.style.display = "none";
    newFolderName.value = "";
  });
  folderInputContainer.append(
    newFolderLabel,
    newFolderName,
    submitFolderButton,
    cancelButton
  );

  newFolderContainer.append(folderInputContainer);

  newFolderParent.append(newFolderContainer);

  newFolderParent.style.display = "block";
}

export default renderNewFolderDialogue;
