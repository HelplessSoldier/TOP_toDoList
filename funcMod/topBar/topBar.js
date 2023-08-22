import { createElement } from "../createElement";
import openNewItemDialogue from "./newItemDialogue";
import { updateLocalStorage } from "../updateLocalStorage";
import renderTodoItems from "../todoElement/renderTodoItems";
import { removeChildren } from "../clearParent";

function renderTopBar(todoParent, parent, array, root) {
  const sideBarContainer = createElement("div", { id: "sideBarContainer" }, "");

  const siteTitle = createElement("h1", { id: "siteTitle" }, "Todo.");

  const newItemButton = createElement(
    "button",
    { id: "newItemButton" },
    "New Task"
  );
  newItemButton.addEventListener("click", () => {
    newItemButton.style.display = "none";
    openNewItemDialogue(todoParent, sideBarContainer, array, newItemButton);
  });

  const sortByDateButton = createElement(
    "button",
    { id: "sortByDateButton" },
    "Sort By Date"
  );
  sortByDateButton.addEventListener("click", () => {
    array.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    updateLocalStorage(array);
    removeChildren(todoParent);
    renderTodoItems(todoParent, array);
  });

  const sortByPriorityButton = createElement(
    "button",
    { id: "sortByPriorityButton" },
    "Sort By Priority"
  );
  sortByPriorityButton.addEventListener("click", () => {
    const priorityValues = {
      "Priority: High": 3,
      "Priority: Medium": 2,
      "Priority: Low": 1,
    };
    array.sort((a, b) => {
      const priorityComparison =
        priorityValues[b.priority] - priorityValues[a.priority];
      if (priorityComparison !== 0) {
        return priorityComparison;
      }
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
    updateLocalStorage(array);
    removeChildren(todoParent);
    renderTodoItems(todoParent, array);
  });

  const toggleDarkModeButton = createElement(
    "button",
    { id: "darkModeToggle" },
    "Dark/Light Mode"
  );
  toggleDarkModeButton.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "light") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  });

  sideBarContainer.append(
    siteTitle,
    newItemButton,
    sortByDateButton,
    sortByPriorityButton,
    toggleDarkModeButton
  );
  parent.append(sideBarContainer);
}

export default renderTopBar;
