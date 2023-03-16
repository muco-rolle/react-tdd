import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment } from "../appointment";

describe("Appointment", () => {
  it("renders the customer's first name", () => {
    const customer = { firstName: "Ashley" };
    const container = document.createElement("div");
    const component = <Appointment customer={customer} />;

    document.body.replaceChildren(container);
    act(() => createRoot(container).render(component));
    expect(document.body.textContent).toContain("Ashley");
  });

  it.skip("renders another customer's first name", () => {
    const customer = { firstName: "Jordan" };
    const container = document.createElement("div");
    const component = <Appointment customer={customer} />;

    document.body.appendChild(container);
    act(() => createRoot(container).render(component));
    expect(document.body.textContent).toContain("Jordan");
  });
});
