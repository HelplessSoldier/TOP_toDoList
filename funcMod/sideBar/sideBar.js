import { createElement } from "../createElement";
import openNewItemDialogue from "./newItemDialogue";

function renderSideBar( parent, array ) {
    const sideBarContainer = createElement('div', { id: 'sideBarContainer' }, '');
    const newItemButton = createElement('button', { id: 'newItemButton' }, 'New Task');
    newItemButton.addEventListener('click', () => {
        openNewItemDialogue( parent, array );
    })
    sideBarContainer.append(newItemButton);
    parent.append(sideBarContainer);
}

export default renderSideBar;