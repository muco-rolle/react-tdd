export type Customer = {
  firstName: string;
};

export type AppointmentProps = {
  customer: Customer;
};

type Appointment = {
  startsAt: number;
};

export type AppointmentsDayViewProps = {
  appointments: Array<Appointment>;
};
