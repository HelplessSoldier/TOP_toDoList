import { createElement } from "../createElement";

function renderSidebar( parent ) {
    const sidebarContainer = createElement('div', { id: 'sidebarContainer' }, '');

    parent.append(sidebarContainer);
}

export default renderSidebar