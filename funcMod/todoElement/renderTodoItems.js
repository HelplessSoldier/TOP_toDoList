function renderTodoItems(array, parent) {
    for(let element of array) {
        parent.append(element);
    }
}

export default renderTodoItems;