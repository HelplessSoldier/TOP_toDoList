export function getTodoArrayFromLocalStorage() {
    const storedTodoArrayString = localStorage.getItem("todoArray");
    if (storedTodoArrayString === null) {
        return [];
    }
    const storedTodoArray = JSON.parse(storedTodoArrayString);
    return storedTodoArray;
}
