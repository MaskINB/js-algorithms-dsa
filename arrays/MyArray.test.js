import { describe, it, expect } from "vitest";
import { MyArray } from "./MyArray.js";

describe("MyArray custom implementation", () => {
  it("should push elements correctly", () => {
    const arr = new MyArray();
    arr.push(1);
    arr.push(2);
    expect(arr.toArray()).toEqual([1, 2]);
    expect(arr.length).toBe(2);
  });

  it("should pop elements correctly", () => {
    const arr = new MyArray();
    arr.push(1);
    arr.push(2);
    const popped = arr.pop();
    expect(popped).toBe(2);
    expect(arr.toArray()).toEqual([1]);
  });

  it("should unshift elements correctly", () => {
    const arr = new MyArray();
    arr.push(2);
    arr.push(3);
    arr.unshift(1);
    expect(arr.toArray()).toEqual([1, 2, 3]);
    expect(arr.length).toBe(3);
  });

  it("should shift elements correctly", () => {
    const arr = new MyArray();
    arr.push(1);
    arr.push(2);
    arr.push(3);
    const shifted = arr.shift();
    expect(shifted).toBe(1);
    expect(arr.toArray()).toEqual([2, 3]);
    expect(arr.length).toBe(2);
  });

  it("should return undefined when popping or shifting empty array", () => {
    const arr = new MyArray();
    expect(arr.pop()).toBeUndefined();
    expect(arr.shift()).toBeUndefined();
  });
});
