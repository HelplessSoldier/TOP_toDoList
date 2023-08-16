function renderTodoItems( parent, array ) {
    for(let element of array) {
        parent.append(element);
    }
}

export default renderTodoItems;