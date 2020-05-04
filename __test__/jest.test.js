const {
  sum,
  mul,
  sub,
  div,
  uppercase,
  hello,
  cloneArray,
  createMethod,
  createMeth,
} = require("../jest");

// describe("some test function", () => {
//   test("Should be equal to 5", () => {
//     expect(sum(2, 3)).toBe("Sum = 5");
//   });
// });

// test("Should be equal to 0)", () => {
//   expect(sum(null, null)).toBe("Sum = 0");
// });

describe("should describe some set of logic", () => {
  test("Adding 1 + 1 equals 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("Multiplying 1 * 1 equals 1", () => {
    expect(mul(1, 1)).toBe(1);
  });

  test("Subtracting 1 - 1 equals 0", () => {
    expect(sub(1, 1)).toBe(0);
  });

  test("Dividing 1 / 1 equals 1", () => {
    expect(div(1, 1)).toBe(1);
  });

  test(`uppercase 'test' to equal 'TEST'`, (done) => {
    uppercase("test", (str) => {
      expect(str).toBe("TEST");
      done();
    });
  });

  test("Check greetings", () => {
    let name = "wesson";
    expect(hello(name)).toBe(`Hello ${name}`);
  });

  test("Expect a clone of our array", () => {
    expect(cloneArray([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("fiddle with method", () => {
    expect(createMethod.make()).toEqual("Make stuffs");
  });

  test("fiddle with HOF", () => {
    expect(new createMeth().make()).toEqual("Make stuffs");
  });
});
