import { createElement } from "../createElement";
import createNewTodoItem from "../todoElement/newTodoItem";
import renderTodoItems from "../todoElement/renderTodoItems";

function openNewItemDialogue( parent, array ) {
    const newItemDialogueContainer = createElement('div', { id: 'newItemDialogueContainer' }, '');

    const titleInputLabel = createElement('label', { for: 'titleInput' }, 'Title: ');
    const titleInput = createElement('input', { id: 'titleInput', type: 'text' }, 'Title');

    const descriptionInputLabel = createElement('label', { for: 'descriptionInput' }, 'Description: ');
    const descriptionInput = createElement('input', { id: 'descriptionInput', type: 'text' }, 'Description');

    const dueDateInputLabel = createElement('label', { for: 'dueDateInput' }, 'Due Date: ');
    const dueDateInput = createElement('input', { id: 'dueDateInput', type: 'date' });

    const priorityInputLabel = createElement('label', { for: 'priorityInput' }, 'Priority: ');
    const priorityInput = createElement('input', { id: 'priorityInput', type: 'text' }, 'Priority');

    const submitButton = createElement('button', { id: 'submitButton' }, 'Submit');
    submitButton.addEventListener('click', () => {
        createNewTodoItem(
            array, 
            titleInput.value, 
            descriptionInput.value, 
            dueDateInput.value, 
            priorityInput.value
        );
        renderTodoItems(array, parent);

        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = '';
    })

    const closeButton = createElement('button', { id: 'closeButton' }, 'Close');

    newItemDialogueContainer.append(
        titleInputLabel,
        titleInput, 
        descriptionInputLabel,
        descriptionInput, 
        dueDateInputLabel,
        dueDateInput, 
        priorityInputLabel,
        priorityInput, 
        submitButton, 
        closeButton
    );
    parent.append(newItemDialogueContainer);
}

export default openNewItemDialogue;