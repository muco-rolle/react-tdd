import { useState } from "react";
import { toDayTime } from "../../utils/date";
import { AppointmentDetail } from "./appointment-detail";
import { button, ButtonVariantProps } from "./button.css";

type Customer = {
  firstName: string;
};

type Appointment = {
  customer: Customer;
  startsAt: number;
};
type AppointmentDayViewProps = {
  appointments: Array<Appointment>;
};

const array = {
  isEmpty(elements: Array<any>): boolean {
    return elements.length === 0;
  },
};

const getColorVariant = (
  selectedElementIndex: number,
  currentElementIndex: number
): ButtonVariantProps => {
  return {
    color: selectedElementIndex === currentElementIndex ? "purple" : "gray",
  };
};

export function AppointmentDayView({ appointments }: AppointmentDayViewProps) {
  const [appointment, setAppointment] = useState<number>(0);

  return (
    <main className="elative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 font-sans text-base text-zinc-900 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
      <section className="flex gap-10">
        <ol className="flex flex-col space-y-2">
          {array.isEmpty(appointments) ? (
            <p>No schedule.</p>
          ) : (
            appointments.map(({ startsAt }, index: number) => (
              <li key={startsAt}>
                <button
                  className={button({ ...getColorVariant(appointment, index) })}
                  type="button"
                  onClick={() => setAppointment(index)}
                >
                  {toDayTime(startsAt)}
                </button>
              </li>
            ))
          )}
        </ol>

        {/* Time details */}
        <article>
          {array.isEmpty(appointments) ? (
            <p>There are no appointments scheduled for today.</p>
          ) : (
            <AppointmentDetail appointment={appointments[appointment]} />
          )}
        </article>
      </section>
    </main>
  );
}
