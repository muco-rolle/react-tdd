export type Customer = {
  firstName: string;
};

export type tAppointment = {
  startsAt: number;
  customer: Customer;
};

export type Appointments = Array<tAppointment>;

export type AppointmentsDayViewProps = {
  appointments: Appointments;
};
