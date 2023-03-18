import type {
  AppointmentProps,
  AppointmentsDayViewProps,
} from "./appointment.types";

export function AppointmentsDayView({
  appointments,
}: AppointmentsDayViewProps) {
  return (
    <div id="appointments-day-view">
      <ol>
        {appointments.map(({ startsAt }) => (
          <li key={startsAt} />
        ))}
      </ol>
    </div>
  );
}

export function Appointment({ customer }: AppointmentProps) {
  return <h1>{customer.firstName}</h1>;
}
