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
        <li key={startsAt}></li>
      ))}
    </ol>
  );
}
