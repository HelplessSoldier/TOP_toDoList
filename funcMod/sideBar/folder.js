class Folder {
  constructor(name) {
    this.name = name;
    this.items = [];
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
}

export default Folder;
