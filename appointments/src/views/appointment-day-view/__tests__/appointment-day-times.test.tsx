import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { AppointmentDayTimes } from "../appointment-day-times";

describe("AppointmentDayTimes", () => {
  let container: HTMLDivElement;

  const today = new Date();

  const appointments = [
    { startsAt: today.setHours(12, 0) },
    { startsAt: today.setHours(13, 0) },
  ];

  const render = (component: ReactNode) => {
    return act(() => {
      return createRoot(container).render(component);
    });
  };

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
    render(<AppointmentDayTimes times={appointments} />);
  });

  it("renders a list of day times", () => {
    const elements = document.querySelectorAll(
      "ol > li"
    ) as NodeListOf<HTMLLIElement>;

    expect(elements).toHaveLength(2);
  });

  it("renders a list of buttons that display a day time", () => {
    const buttons = document.querySelectorAll(
      "ol > li > button"
    ) as NodeListOf<HTMLButtonElement>;
    expect(buttons).toHaveLength(2);
  });
});
