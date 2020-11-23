const makeToken = require("../sample-1-use-module.js");

describe("makeToken", () => {
  it("creates something without an error", () => {
    expect(makeToken()).not.toBeFalsy();
  });
});
