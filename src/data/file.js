export class File {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }

  getName() {
    return this.name;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }
}
