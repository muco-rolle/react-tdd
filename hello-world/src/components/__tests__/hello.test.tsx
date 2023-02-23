import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Hello } from "../hello";

describe("<Hello />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component: ReactNode) => {
    return act(() => {
      createRoot(container).render(component);
    });
  };

  it("says Hello, World by default", () => {
    render(<Hello />);
    expect(document.body.textContent).toContain("Hello, World");
  });

  it("greets a person by name", () => {
    render(<Hello name="Muco" />);
    expect(document.body.textContent).toContain("Hello, Muco");
  });

  it("greets a person by name in Kirundi", () => {
    render(<Hello name="Muco" lang="ki" />);
    expect(document.body.textContent).toContain("Amahoro, Muco");
  });
});
