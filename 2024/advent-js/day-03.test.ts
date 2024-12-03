import { describe, expect, it } from "vitest";

import { organizeInventory } from "./day-03";

describe.concurrent("organizeInventory", () => {
  it.concurrent("should organize inventory by category", () => {
    const inventary = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ];
    expect(organizeInventory(inventary)).toEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });
  });

  it.concurrent("should organize inventory by category", () => {
    const inventary = [
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ];
    expect(organizeInventory(inventary)).toEqual({
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    });
  });
});
