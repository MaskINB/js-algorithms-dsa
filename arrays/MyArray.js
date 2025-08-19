// MyArray.js
export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  unshift(element) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = element;
    this.length++;
    return this.length;
  }

  shift() {
    if (this.length === 0) return undefined;
    const firstElement = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  toArray() {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(this.data[i]);
    }
    return result;
  }
}
