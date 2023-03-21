import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { AppointmentDayTime } from "../appointment-day-time";

describe("AppointmentDayTime", () => {
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

  it("renders button element and displays a day time", () => {
    const today = new Date();
    const time = today.setHours(12, 0);
    render(<AppointmentDayTime time={time} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    expect(button.type).toEqual("button");
    expect(document.body.textContent).toEqual("12:00");
  });
});
