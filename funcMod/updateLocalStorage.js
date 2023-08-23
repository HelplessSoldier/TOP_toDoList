export function updateLocalStorage(array) {
    localStorage.setItem("todoArray", JSON.stringify(array));
}
