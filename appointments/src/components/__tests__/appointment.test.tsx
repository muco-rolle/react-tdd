import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment, AppointmentsDayView } from "../appointment";

describe("Appointment", () => {
  let container: HTMLDivElement;

  const render = (component: ReactNode) => {
    return act(() => createRoot(container).render(component));
  };

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders the customer's first name", () => {
    const customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toEqual("Ashley");
  });

  it("renders another customer's first name", () => {
    const customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toEqual("Jordan");
  });
});

describe("AppointmentDayView", () => {
  let container: HTMLDivElement;

  const render = (component: ReactNode) => {
    return act(() => createRoot(container).render(component));
  };
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    const element = document.querySelector("#appointments-day-view");
    expect(element).not.toBeNull();
  });

  it("renders an ol element to display appointment times", () => {
    render(<AppointmentsDayView appointments={[]} />);
    const element = document.querySelector("ol");
    expect(element).not.toBeNull();
  });

  it("renders a li element to display each appointment time", () => {
    const today = new Date();
    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) },
    ];

    render(<AppointmentsDayView appointments={appointments} />);
    const elements = document.querySelectorAll("li");
    expect(elements).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    const today = new Date();
    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) },
    ];

    render(<AppointmentsDayView appointments={appointments} />);

    const elements = document.querySelectorAll("li");

    expect(elements[0].textContent).toEqual("12:00");
    expect(elements[1].textContent).toEqual("13:00");
  });
});
