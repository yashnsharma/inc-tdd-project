const add = require("../src/add");
const expect = require("chai").expect;

describe("Calculator Module", () => {
  it("Add should be a function", () => {
    expect(add).to.be.a("function");
  });

  it("Should fail when an Empty Input is passed", () => {
    expect(add("")).to.be.false;
  });

  it("Should fail when More than 2 Numbers are passed", () => {
    expect(add("123")).to.be.false;
  });

  it("Should provide correct sum when 2 Numbers are passed", () => {
    expect(add("4,7")).to.equal(11);
  });

  it("Should handle negative Numbers when passed", () => {
    expect(add("-4,7")).to.be.false;
  });

  it("Should calculate sum and handle custom delimiter", () => {
    expect(add("//;\n1;2")).to.equal(3);
  });

  it("Should calculate sum and handle newline", () => {
    expect(add("\n4,7")).to.equal(11);
  });
});
