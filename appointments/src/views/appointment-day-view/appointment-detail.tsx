import { toDayTime } from "../../utils/date";

type Customer = {
  firstName: string;
};

type Appointment = {
  startsAt: number;
  customer: Customer;
};

type AppointmentDetailProps = {
  appointment: Appointment;
};

export function AppointmentDetail({ appointment }: AppointmentDetailProps) {
  const { startsAt } = appointment;
  return (
    <h1 className="font-bold text-2xl">
      Today's appointmenent at {toDayTime(startsAt)}
    </h1>
  );
}
