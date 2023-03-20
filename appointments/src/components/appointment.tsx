import { useState } from "react";
import { toDayTime } from "../utils/date";
import type { AppointmentsDayViewProps, Customer } from "./appointment.types";

export function AppointmentsDayView({
  appointments,
}: AppointmentsDayViewProps) {
  const [appointementIndex, setAppointmentIndex] = useState(0);
  return (
    <div id="appointments-day-view">
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[appointementIndex]} />
      )}
      <ol>
        {appointments.map(({ startsAt }, index) => (
          <li key={startsAt}>
            <button type="button" onClick={() => setAppointmentIndex(index)}>
              {toDayTime(startsAt)}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

type AppointmentProps = {
  customer: Customer;
};

export function Appointment({ customer }: AppointmentProps) {
  return <h1>{customer.firstName}</h1>;
}
