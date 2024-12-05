import { describe, expect, it } from "vitest";

import { organizeShoes, Shoe } from "./day-05";

describe.concurrent("organizeShoes", () => {
  it.concurrent("", () => {
    const shoes = [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ] as Shoe[];
    expect(organizeShoes(shoes)).toEqual([38, 42]);
  });

  it.concurrent("", () => {
    const shoes = [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "I", size: 38 },
      { type: "I", size: 38 },
      { type: "R", size: 38 },
    ] as Shoe[];
    expect(organizeShoes(shoes)).toEqual([38, 38]);
  });

  it.concurrent("", () => {
    const shoes = [
      { type: "I", size: 38 },
      { type: "R", size: 36 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 43 },
    ] as Shoe[];
    expect(organizeShoes(shoes)).toEqual([]);
  });
});
