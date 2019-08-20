import { exportAllDeclaration } from "@babel/types";

const adder = (x, y) => x + y;

describe("Adder", () => {
  test("adds two numbers", () => {
    expect(adder(5, 3)).toEqual(8);
  });
});
