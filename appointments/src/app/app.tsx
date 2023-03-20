import { AppointmentsDayView } from "../components";
import { data } from "../data";

export function App() {
  return <AppointmentsDayView appointments={data.appointments} />;
}
