import { createElement } from "../createElement";

class TodoItem {
    constructor(title, description, dueDate, priority, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id || Date.now();
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

    changeDescription(newDescription) {
        this.description = newDescription;
    }

    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    changePriority(newPriority) {
        this.priority = newPriority;
    }

    createTodoElement() {
        const todoElement = createElement("div", { class: "todoElement" }, "");

        const title = createElement("h3", { class: "todoTitle" }, this.title);
        const description = createElement("p", { class: "todoDescription" }, this.description);
        const dueDate = createElement("p", { class: "todoDueDate" }, `Due Date: ${this.dueDate}`);
        const priority = createElement("p", { class: "todoPriority" }, this.priority);

        const buttonContainer = createElement("div", { class: "buttonContainer" }, "");
        const removeButton = createElement("button", { class: "removeButton" }, "Remove");
        removeButton.addEventListener("click", () => {
            const removeEvent = new CustomEvent("removeTodoItem", {
                detail: this.id,
            });
            window.dispatchEvent(removeEvent);
            todoElement.remove();
        });

        const editButton = createElement("button", { class: "editButton" }, "Edit");
        editButton.addEventListener("click", () => {
            const editEvent = new CustomEvent("editTodoItem", {
                detail: this.id,
            });
            window.dispatchEvent(editEvent);
        });
        buttonContainer.append(removeButton, editButton);

        todoElement.append(title, description, dueDate, priority, buttonContainer);
        return todoElement;
    }
}

export default TodoItem;
