import { createElement } from "../createElement";
import Folder from "./folder";

function renderSidebar(parent) {
  const sidebarContainer = createElement("div", { id: "sidebarContainer" }, "");

  const sideTitleContainer = createElement(
    "div",
    { id: "sideTitleContainer" },
    ""
  );
  const sideTitle = createElement("h3", { id: "sideTitle" }, "Folders:");
  const newFolderButton = createElement(
    "button",
    { id: "newFolderButton" },
    "New Folder"
  );
  newFolderButton.addEventListener("click", () => {
    const newFolderEvent = new CustomEvent("newFolderButtonPressed");
    window.dispatchEvent(newFolderEvent);
  });
  sideTitleContainer.append(sideTitle, newFolderButton);

  sidebarContainer.append(sideTitleContainer);

  parent.append(sidebarContainer);
}

export default renderSidebar;
