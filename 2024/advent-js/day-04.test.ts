import { describe, expect, it } from "vitest";

import { createXmasTree } from "./day-04";

describe.concurrent("createXmasTree", () => {
  it.concurrent("should create a tree", () => {
    const height = 5;
    const ornament = "*";
    expect(createXmasTree(height, ornament)).toEqual(
      `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`
    );
  });

  it.concurrent("should create a tree", () => {
    const height = 3;
    const ornament = "+";
    expect(createXmasTree(height, ornament)).toEqual(
      `__+__
_+++_
+++++
__#__
__#__`
    );
  });

  it.concurrent("should create a tree", () => {
    const height = 6;
    const ornament = "@";
    expect(createXmasTree(height, ornament)).toEqual(
      `_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`
    );
  });
});
