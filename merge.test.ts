import merge from "./merge";

describe("merge function", () => {
  it("can merge [1, 3, 5], [2, 4, 6] to [1, 2, 3, 4, 5, 6]", () => {
    let result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it("can merge [3, 5, 7, 9], [1, 2, 4, 6, 8, 10] to [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    let result = merge([3, 5, 7, 9], [1, 2, 4, 6, 8, 10]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
