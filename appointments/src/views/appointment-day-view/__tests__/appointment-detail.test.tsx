import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { AppointmentDetail } from "../appointment-detail";

describe("AppointmentDetail", () => {
  let container: HTMLDivElement;
  const render = (component: ReactNode) => {
    return act(() => {
      return createRoot(container).render(component);
    });
  };

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders an appointment detail", () => {
    const today = new Date();
    const appointment = {
      startsAt: today.setHours(12, 0),
      customer: {
        firstName: "Jordan",
      },
    };

    render(<AppointmentDetail appointment={appointment} />);

    const titleElement = document.querySelector("h1");
    expect(titleElement?.textContent).toContain("at 12:00");
  });
});
