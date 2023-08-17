import { createElement } from "../createElement";
import createNewTodoItem from "../todoElement/newTodoItem";
import renderTodoItems from "../todoElement/renderTodoItems";
import { removeChildren } from "../clearParent";

function openNewItemDialogue( todoParent, parent, array, newItemButton ) {
    const newItemDialogueContainer = createElement('div', { id: 'newItemDialogueContainer' }, '');

    // title input field
    const titleInputContainer = createElement('div', { id: 'titleInputContainer' }, '');
    const titleInputLabel = createElement('label', { for: 'titleInput' }, 'Title: ');
    const titleInput = createElement('input', { id: 'titleInput', type: 'text' }, 'Title');
    titleInputContainer.append(titleInputLabel, titleInput);

    // description input field
    const descriptionInputContainer = createElement('div', { id: 'descriptionInputContainer' }, '');
    const descriptionInputLabel = createElement('label', { for: 'descriptionInput' }, 'Description: ');
    const descriptionInput = createElement('input', { id: 'descriptionInput', type: 'text' }, 'Description');
    descriptionInputContainer.append(descriptionInputLabel, descriptionInput);

    // due date input field
    const dueDateInputContainer = createElement('div', { id: 'dueDateInputContainer' }, '');
    const dueDateInputLabel = createElement('label', { for: 'dueDateInput' }, 'Due Date: ');
    const dueDateInput = createElement('input', { id: 'dueDateInput', type: 'date' });
    dueDateInputContainer.append(dueDateInputLabel, dueDateInput);

    // priority input field
    const priorityInputContainer = createElement('div', { id: 'priorityInputContainer' }, '');
    const priorityInputLabel = createElement('label', { for: 'priorityInput' }, 'Priority: ');
    const priHighLabel = createElement('label', { for: 'priorityInputHigh' }, 'High:');
    const priorityInputHigh = createElement('input', { id: 'priorityInputHigh', type: 'radio', name: 'priority' });
    const priMidLabel = createElement('label', { for: 'priorityInputMid' }, 'Medium:');
    const priorityInputMed = createElement('input', { id: 'priorityInputMed', type: 'radio', name: 'priority' });
    const priLowLabel = createElement('label', { for: 'priorityInputLow' }, 'Low:');
    const priorityInputLow = createElement('input', { id: 'priorityInputLow', type: 'radio', name: 'priority' });
    priorityInputContainer.append(
        priorityInputLabel, 
        priHighLabel, 
        priorityInputHigh,
        priMidLabel, 
        priorityInputMed, 
        priLowLabel,
        priorityInputLow
        );

    // submit button
    const submitButton = createElement('button', { id: 'submitButton' }, 'Submit');
    submitButton.addEventListener('click', () => {
        if (titleInput.value && descriptionInput.value && dueDateInput.value) {
            let priorityValue;
    
            if (priorityInputHigh.checked) {
                priorityValue = "Priority: High";
            } else if (priorityInputMed.checked) {
                priorityValue = "Priority: Medium";
            } else if (priorityInputLow.checked) {
                priorityValue = "Priority: Low";
            }
    
            if (priorityValue) {
                createNewTodoItem(
                    array, 
                    titleInput.value, 
                    descriptionInput.value, 
                    dueDateInput.value, 
                    priorityValue
                    );

                removeChildren(todoParent);
                renderTodoItems(todoParent, array);

                titleInput.value = '';
                descriptionInput.value = '';
                dueDateInput.value = '';
    
                priorityInputHigh.checked = false;
                priorityInputMed.checked = false;
                priorityInputLow.checked = false;
            }
        }
    });
            
    // close button
    const closeButton = createElement('button', { id: 'closeButton' }, 'Close');
    closeButton.addEventListener('click', () => {
        newItemButton.style.display = 'block';
        newItemDialogueContainer.remove();
    });

    // Appending all elements
    newItemDialogueContainer.append(
        titleInputContainer,
        descriptionInputContainer,
        dueDateInputContainer,
        priorityInputContainer,
        submitButton,
        closeButton
    );

    parent.append(newItemDialogueContainer);
}

export default openNewItemDialogue;