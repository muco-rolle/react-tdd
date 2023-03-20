import {
  randFirstName,
  randLastName,
  randPhoneNumber,
  randSentence,
} from "@ngneat/falso";

const unique = (elements: Array<string>) => {
  return elements.filter((element, index, array) => {
    return array.indexOf(element) === index;
  });
};

const random = (elements: Array<string>) => {
  return elements[Math.floor(Math.random() + elements.length)];
};

const stylists = [0, 1, 2, 3, 4, 5, 6].map(() => randFirstName());

const services = [
  "Cut",
  "Blow-dry",
  "Cut & color",
  "Beard trim",
  "Cut & beard trim",
  "Extensions",
];

const generateFakeCustomer = () => ({
  firstName: randFirstName(),
  lastName: randLastName(),
  phoneNumber: randPhoneNumber(),
});

const generateFakeAppointments = () => ({
  customer: generateFakeCustomer(),
  stylist: random(stylists),
  service: random(services),
  notes: randSentence({ length: 30 }),
});
const today = new Date();
const at = (hours: number) => today.setHours(hours, 0);

const appointments = [
  { startsAt: at(9), ...generateFakeAppointments() },
  { startsAt: at(10), ...generateFakeAppointments() },
  { startsAt: at(11), ...generateFakeAppointments() },
  { startsAt: at(12), ...generateFakeAppointments() },
  { startsAt: at(13), ...generateFakeAppointments() },
  { startsAt: at(14), ...generateFakeAppointments() },
  { startsAt: at(15), ...generateFakeAppointments() },
  { startsAt: at(16), ...generateFakeAppointments() },
  { startsAt: at(17), ...generateFakeAppointments() },
];

export const data = { appointments };
