import { toDayTime } from "../../utils/date";

type AppointmentDayTimeProps = {
  time: number;
};
export function AppointmentDayTime({ time }: AppointmentDayTimeProps) {
  return <button type="button">{toDayTime(time)}</button>;
}
