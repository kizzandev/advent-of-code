import { describe, expect, it } from "vitest";

import { createFrame } from "./day-02";

describe.concurrent("createFrame", () => {
  it.concurrent(
    "should return a string with kizzan's name centered and surrounded by stars",
    () => {
      const frame = ["kizzan"];
      expect(createFrame(frame)).toEqual(
        `**********
* kizzan *
**********`
      );
    }
  );

  it.concurrent("should return the names framed with stars", () => {
    const frame = ["midu", "madeval", "educalvolpz"];
    expect(createFrame(frame)).toEqual(
      `***************
* midu        *
* madeval     *
* educalvolpz *
***************`
    );
  });

  it.concurrent("should return the name framed with stars", () => {
    const frame = ["midu"];
    expect(createFrame(frame)).toEqual(
      `********
* midu *
********`
    );
  });

  it.concurrent("should return the names framed with stars", () => {
    const frame = ["a", "bb", "ccc"];
    expect(createFrame(frame)).toEqual(
      `*******
* a   *
* bb  *
* ccc *
*******`
    );
  });

  it.concurrent("should return the names framed with stars", () => {
    const frame = ["a", "bb", "ccc", "dddd"];
    expect(createFrame(frame)).toEqual(
      `********
* a    *
* bb   *
* ccc  *
* dddd *
********`
    );
  });
});
