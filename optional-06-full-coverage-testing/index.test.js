import { expect, test } from "bun:test";
import sum from "./index.js";

test("jumlah dua bilangan positif", () => {
  expect(sum(5, 10)).toBe(15);
  expect(sum(1, 2)).toBe(3);
});

test("jumlah dengan argumen non-angka", () => {
  expect(sum("5", 10)).toBe(0);
  expect(sum(5, "test")).toBe(0);
  expect(sum("test", "5")).toBe(0);
});

test("jumlah dengan angka negatif", () => {
  expect(sum(-5, 10)).toBe(0);
  expect(sum(5, -10)).toBe(0);
  expect(sum(-5, -10)).toBe(0);
});

test("jumlah dengan nol", () => {
  expect(sum(0, 10)).toBe(10);
  expect(sum(10, 0)).toBe(10);
});

test("jumlah dua angka nol", () => {
  expect(sum(0, 0)).toBe(0);
});
