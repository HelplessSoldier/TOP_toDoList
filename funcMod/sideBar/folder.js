class Folder {
    constructor(name, id) {
        this.name = name;
        this.items = [];
        this.id = Date.now() || id;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(itemToRemove) {
        const indexToRemove = this.items.indexOf(itemToRemove);
        if (indexToRemove !== -1) {
            this.items.splice(indexToRemove, 1);
        }
    }
    changeName(newName) {
        this.name = newName;
    }
}

export default Folder;
