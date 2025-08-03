class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._contents = contents;
    this._lines = contents ? contents.split('\n') : [];
    this._charIndex = 0;
    this._lineIndex = 0;
​
    const lastDotIndex = fullName.lastIndexOf('.');
    this._extension = fullName.slice(lastDotIndex + 1);
    this._filename = fullName.slice(0, lastDotIndex);
  }
​
  get fullName() {
    return this._fullName;
  }
​
  get filename() {
    return this._filename;
  }
​
  get extension() {
    return this._extension;
  }
​
  getContents() {
    return this._contents;
  }
​
  write(str) {
    if (this._contents === '') {
      this._contents = str;
    } else {
      this._contents += '\n' + str;
    }
    this._lines.push(str);
  }
​
  gets() {
    if (this._lineIndex >= this._lines.length) return undefined;
    return this._lines[this._lineIndex++];
  }
​
  getc() {
    if (this._charIndex >= this._contents.length) return undefined;
    return this._contents[this._charIndex++];
  }
}