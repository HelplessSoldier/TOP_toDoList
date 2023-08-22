function renderTodoItems(parent, array) {
  for (let item of array) {
    const element = item.createTodoElement();
    parent.append(element);
  }
}

export default renderTodoItems;
