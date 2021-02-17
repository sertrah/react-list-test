import { suspectText } from "./common";

describe("Helpers tests", () => {
  it("suspectText func must be true if teh texts are not the same", function () {
    expect(suspectText("Hola", "ho")).toBeTruthy();
  });
  it("suspectText func must be false if teh texts are not the same", function () {
    expect(suspectText("ola", "ho")).toBeFalsy();
  });
});
