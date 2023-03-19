import { toDayTime } from "../utils/date";
import type { AppointmentsDayViewProps, Customer } from "./appointment.types";

export function AppointmentsDayView({
  appointments,
}: AppointmentsDayViewProps) {
  return (
    <div id="appointments-day-view">
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[0]} />
      )}
      <ol>
        {appointments.map(({ startsAt }) => (
          <li key={startsAt}>{toDayTime(startsAt)}</li>
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
