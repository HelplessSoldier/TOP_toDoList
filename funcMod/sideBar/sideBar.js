import { createElement } from "../createElement";
import openNewItemDialogue from "./newItemDialogue";

function renderSideBar( todoParent, parent, array ) {
    const sideBarContainer = createElement('div', { id: 'sideBarContainer' }, '');
    const newItemButton = createElement('button', { id: 'newItemButton' }, 'New Task');
    newItemButton.addEventListener('click', () => {
        openNewItemDialogue( todoParent, sideBarContainer, array );
    })
    sideBarContainer.append(newItemButton);
    parent.append(sideBarContainer);
}

export default renderSideBar;