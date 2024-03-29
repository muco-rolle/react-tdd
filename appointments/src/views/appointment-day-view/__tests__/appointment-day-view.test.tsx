import { act } from "react-dom/test-utils";
import { AppointmentDayView } from "../appointment-day.view";

import { click, initializeReactContainer, render } from "../../../../test";

describe("AppointmentDayView", () => {
  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Jordan" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Ashley" } },
  ];

  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders no appointments for today if there's no one", () => {
    render(<AppointmentDayView appointments={[]} />);
    const list = document.querySelector("ol") as HTMLOListElement;
    expect(list?.textContent).toContain("No schedule");
  });

  it("renders the first appointment in the list if no one has selected", () => {
    render(<AppointmentDayView appointments={appointments} />);
    const title = document.querySelector("h1");
    expect(title?.textContent).toContain("at 12:00");
  });

  it("can select an appointment time", () => {
    render(<AppointmentDayView appointments={appointments} />);

    const buttons = document.querySelectorAll(
      "ol > li > button"
    ) as NodeListOf<HTMLButtonElement>;

    act(() => buttons[1].click());
    const title = document.querySelector("h1") as HTMLHeadingElement;
    expect(title.textContent).toContain("at 13:00");
  });

  it("renders a list of buttons that display a day time", () => {
    render(<AppointmentDayView appointments={appointments} />);

    const buttons = document.querySelectorAll(
      "ol > li > button"
    ) as NodeListOf<HTMLButtonElement>;
    expect(buttons).toHaveLength(2);
    expect(buttons[0].textContent).toEqual("12:00");
    expect(buttons[1].textContent).toEqual("13:00");
  });

  it("renders a list of day times", () => {
    render(<AppointmentDayView appointments={appointments} />);

    const elements = document.querySelectorAll(
      "ol > li"
    ) as NodeListOf<HTMLLIElement>;

    expect(elements).toHaveLength(2);
  });

  it("it adds a purple color to the button if it has been selected", () => {
    render(<AppointmentDayView appointments={appointments} />);
    const button = document.querySelector(
      'button[type="button"]'
    ) as HTMLButtonElement;

    click(button);

    const result = button.className;

    console.log(result);
    expect(result).toContain("purple");
  });
  it("it does not add a purple color if the button has not been selected", () => {
    render(<AppointmentDayView appointments={appointments} />);
    const buttons = document.querySelectorAll(
      'button[type="button"]'
    ) as NodeListOf<HTMLButtonElement>;

    expect(buttons[0].className).toContain("purple");
    expect(buttons[1].className).to.not.contain("purple");
  });
  it("it has a gray color if it has been selected", () => {
    render(<AppointmentDayView appointments={appointments} />);
    const buttons = document.querySelectorAll(
      'button[type="button"]'
    ) as NodeListOf<HTMLButtonElement>;

    expect(buttons[1].className).toContain("gray");
  });
});
