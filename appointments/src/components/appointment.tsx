import type {
  AppointmentProps,
  AppointmentsDayViewProps,
} from "./appointment.types";

export function AppointmentsDayView({}: AppointmentsDayViewProps) {
  return (
    <div id="appointments-day-view">
      <ol>
        <li>12:00</li>
        <li>13:00</li>
      </ol>
    </div>
  );
}

export function Appointment({ customer }: AppointmentProps) {
  return <h1>{customer.firstName}</h1>;
}
