import { initializeReactContainer, render } from "../../../../test";
import { AppointmentDayTime } from "../appointment-day-time";

describe("AppointmentDayTime", () => {
  beforeEach(() => {
    initializeReactContainer();
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
