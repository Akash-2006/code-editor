export class Directory {
  constructor() {
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
  }

  getFiles() {
    return this.files;
  }

  clearFiles() {
    this.files = [];
  }
}
