import { createElement } from "../createElement";

class TodoItem {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    changeTitle( newTitle ) {
        this.title = newTitle;
    }

    changeDescription( newDescription ) {
        this.description = newDescription;
    }

    changeDueDate( newDueDate ) {
        this.dueDate = newDueDate;
    }

    changePriority( newPriority ) {
        this.priority = newPriority;
    }

    createTodoElement() {
        const todoElement = createElement('div', { class: 'todoElement' }, '');

        const title = createElement('h3', { class: 'todoTitle' }, this.title);
        const description = createElement('p', { class: 'todoDescription'}, this.description);
        const dueDate = createElement('p', { class: 'todoDueDate' }, `Due Date: ${this.dueDate}`);
        const priority = createElement('p', { class: 'todoPriority' }, this.priority);

        const removeButton = createElement('button', { class: 'removeButton' }, 'Remove');
        removeButton.addEventListener('click', () => {
            todoElement.remove();
        })

        todoElement.append(title, description, dueDate, priority, removeButton);
        return todoElement;
    }
}

export default TodoItem;