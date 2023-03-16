type Customer = {
  firstName: string;
};

type AppointmentProps = {
  customer: Customer;
};

export function Appointment({ customer }: AppointmentProps) {
  return <h1>Ashley</h1>;
}
