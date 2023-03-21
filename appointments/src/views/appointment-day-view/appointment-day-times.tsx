import { AppointmentDayTime } from "./appointment-day-time";

type Time = {
  startsAt: number;
};

type AppointmentDayTimesProps = {
  times: Array<Time>;
};

export function AppointmentDayTimes({ times }: AppointmentDayTimesProps) {
  return (
    <ol>
      {times.map(({ startsAt }) => (
        <li key={startsAt}>
          <AppointmentDayTime time={startsAt} />
        </li>
      ))}
    </ol>
  );
}
