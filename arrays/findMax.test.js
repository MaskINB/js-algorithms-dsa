import { describe,it,test,expect } from "vitest";
import findMax from "./findMax.js";

it("should find the maximum value in an array", () => {
  const array = [3, 7, 2, 9, 1, 5];
  const result = findMax(array);
  expect(result).toBe(9);
});
