import { describe, it, expect } from "vitest";
import {removeDuplicates} from "./removeDuplicates.js";

describe("removeDuplicates", () => {
  it("should remove duplicate values from an array", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

  it("should return an empty array when all elements are duplicates", () => {
    expect(removeDuplicates([1, 1, 1, 1, 1])).toEqual([1]);
  });
