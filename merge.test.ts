import merge from "./merge";

describe("merge function", () => {
  it("can merge 1, 3, 5], [2, 4, 6] to 1, 2, 3, 4, 5, 6]", () => {
    let result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
