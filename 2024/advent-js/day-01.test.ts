import { describe, expect, it } from "vitest";

import { prepareGifts } from "./day-01";

describe.concurrent("prepareGifts", () => {
  it.concurrent(
    "should return a new list with no duplicates and sorted in ascending order",
    () => {
      const gifts = [3, 1, 2, 3, 4, 2, 5];
      expect(prepareGifts(gifts)).toEqual([1, 2, 3, 4, 5]);
    }
  );

  it.concurrent("should return a new list with no duplicates", () => {
    const gifts = [6, 5, 5, 5, 5];
    expect(prepareGifts(gifts)).toEqual([5, 6]);
  });

  it.concurrent("should return an empty list if the input is empty", () => {
    const gifts = [];
    expect(prepareGifts(gifts)).toEqual([]);
  });
});
