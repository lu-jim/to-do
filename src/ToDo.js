class ToDo {
  constructor(description, length) {
    this.description = description;
    this.completed = false;
    this.index = length;
  }
}

module.exports = { ToDo };
