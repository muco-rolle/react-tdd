import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment, AppointmentsDayView } from "../appointment";
import { Appointments } from "../appointment.types";

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

  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ] as Appointments;

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
    render(<AppointmentsDayView appointments={appointments} />);
    const elements = document.querySelectorAll("li");
    expect(elements).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={appointments} />);

    const elements = document.querySelectorAll("li");

    expect(elements[0].textContent).toEqual("12:00");
    expect(elements[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying that they are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.body.textContent).toContain(
      "There are no appointments scheduled for today."
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(document.body.textContent).toContain("Ashley");
  });

  it("has a button in each li", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const buttons = document.querySelectorAll(
      "li > button"
    ) as NodeListOf<HTMLButtonElement>;
    expect(buttons[0].type).toEqual("button");
    expect(buttons[0].type).toEqual("button");
  });

  it("renders an appointment that was selected", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const buttons = document.querySelectorAll(
      'button[type="button"]'
    ) as NodeListOf<HTMLButtonElement>;

    const button = buttons[1];
    act(() => button.click());

    expect(document.body.textContent).toContain("Jordan");
  });
});
