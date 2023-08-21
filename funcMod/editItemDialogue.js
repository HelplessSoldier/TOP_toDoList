import { removeChildren } from "./clearParent";
import { createElement } from "./createElement";

export function editItemDialogue( item, editItemParent ) {
    removeChildren( editItemParent );

    const titleContainer = createElement('div', { id: 'editTitleContainer' }, '');
    const titleInputLabel = createElement('label', { for: 'editTitleInput' }, 'Title');
    const titleInput = createElement('input', { type: 'text', id: 'editTitleInput'}, '');
    titleContainer.append(titleInputLabel, titleInput)

    const descriptionContainer = createElement('div', { id: 'editDescriptionContainer' }, '');
    const descriptionInputLabel = createElement('label', { for: 'editDescriptionInput' }, 'Description');
    const descriptionInput = createElement('input', { type: 'text', id: 'editDescriptionInput'}, '');
    descriptionContainer.append(descriptionInputLabel, descriptionInput)

    const editDueDateContainer = createElement('div', { id: 'editDueDateContainer' }, '');
    const editDueDateInputLabel = createElement('label', { for: 'editDueDateInput' }, 'Due Date');
    const editDueDateInput = createElement('input', { type: 'date', id: 'editDueDateInput'}, '');
    editDueDateContainer.append(editDueDateInputLabel, editDueDateInput)

    const editPriorityInputContainer = createElement('div', { id: 'editPriorityInputContainer' }, '');
    const editPriorityInputLabel = createElement('label', { for: 'editPriorityInput' }, 'Priority: ');
    const editPriHighLabel = createElement('label', { for: 'editPriorityInputHigh' }, 'High:');
    const editPriorityInputHigh = createElement('input', { id: 'editPriorityInputHigh', type: 'radio', name: 'priority' });
    const editPriMidLabel = createElement('label', { for: 'editPriorityInputMid' }, 'Medium:');
    const editPriorityInputMed = createElement('input', { id: 'editPriorityInputMed', type: 'radio', name: 'priority' });
    const editPriLowLabel = createElement('label', { for: 'editPriorityInputLow' }, 'Low:');
    const editPriorityInputLow = createElement('input', { id: 'editPriorityInputLow', type: 'radio', name: 'priority' });
    editPriorityInputContainer.append(
        editPriorityInputLabel, 
        editPriHighLabel, 
        editPriorityInputHigh,
        editPriMidLabel, 
        editPriorityInputMed, 
        editPriLowLabel,
        editPriorityInputLow
        );

    const editButtonContainer = createElement('div', { class: 'buttonContainer' }, '');

    // apply all inputs to the item, then close popup
    const editSubmitButton = createElement('button', { class: 'editButton' }, 'Submit');
    editSubmitButton.addEventListener('click', () => {
        // if field filled, apply to the items attributes
        if (titleInput.value) {
            item.changeTitle(titleInput.value);
        }
        if (descriptionInput.value) {
            item.changeDescription(descriptionInput.value);
        }
        if (editDueDateInput.value) {
            item.changeDueDate(editDueDateInput.value);
        }
        // get priority selection
        let editPriorityValue;
        if (editPriorityInputHigh.checked) {
            editPriorityValue = "Priority: High";
        } else if (editPriorityInputMed.checked) {
            editPriorityValue = "Priority: Medium";
        } else if (editPriorityInputLow.checked) {
            editPriorityValue = "Priority: Low";
        }
        // edit priority if one selected
        if (editPriorityValue) {
            item.changePriority(editPriorityValue);
        }
        // close edit popup
        editItemParent.style.display = 'none';
        titleInput.value = '';
        descriptionInput.value = '';
        editDueDateInput.value = '';
        editPriorityInputHigh.checked = false;
        editPriorityInputMed.checked = false;
        editPriorityInputLow.checked = false;
    })

    const editCloseButton = createElement('button', { class: 'editButton' }, 'Close');
    editCloseButton.addEventListener('click', () => {
        editItemParent.style.display = 'none';
        titleInput.value = '';
        descriptionInput.value = '';
        editDueDateInput.value = '';
        editPriorityInputHigh.checked = false;
        editPriorityInputMed.checked = false;
        editPriorityInputLow.checked = false;
    })

    editButtonContainer.append(editSubmitButton, editCloseButton);

    editItemParent.append(
        titleContainer, 
        descriptionContainer, 
        editDueDateContainer, 
        editPriorityInputContainer,
        editButtonContainer
        )
    
    editItemParent.style.display = 'block';
}