import { data } from "../data";
import { AppointmentDayView } from "../views";

export function App() {
  return (
    <>
      <AppointmentDayView appointments={data.appointments} />
    </>
  );
}
