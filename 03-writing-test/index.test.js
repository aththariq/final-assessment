import { expect, test } from "bun:test";
import { sum } from "./index.js";

test("jumlah 1 dan 2 seharusnya 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("jumlah 0 dan 0 seharusnya 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("jumlah -1 dan -1 seharusnya -2", () => {
  expect(sum(-1, -1)).toBe(-2);
});

test("jumlah 100 dan 200 seharusnya 300", () => {
  expect(sum(100, 200)).toBe(300);
});
