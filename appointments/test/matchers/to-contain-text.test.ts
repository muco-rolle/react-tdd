import { describe, expect, it } from "vitest";
import { toContainText } from "./to-contain-text";

describe("toContainText matcher", () => {
  it("returns pass true when the text given is found in the given DOM element", () => {
    const element = document.createElement("div");
    element.textContent = "text to find";

    const result = toContainText(element, "text to find");
    expect(result.pass).toBe(true);
  });

  it("returns pass false when the text give is not found in the given DOM element", () => {
    const element = document.createElement("div");
    element.textContent = "";

    const result = toContainText(element, "text to find");
    expect(result.pass).toBe(false);
  });
});
