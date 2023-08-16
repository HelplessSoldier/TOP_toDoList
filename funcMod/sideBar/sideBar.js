import { createElement } from "../createElement";

function renderSideBar( parent ) {
    const sideBarContainer = createElement('div', { id: 'sideBarContainer' }, '');
    const newItemButton = createElement('button', { id: 'newItemButton' }, 'New Task');
    newItemButton.addEventListener('click', () => {
        openNewItemDialogue();
    })
    sideBarContainer.append(newItemButton);
    parent.append(sideBarContainer);
}

export default renderSideBar;