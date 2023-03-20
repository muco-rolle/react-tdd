import { toDayTime } from "../date";

describe("toDateTime", () => {
  it("it should convert a date string into a readable day time", () => {
    const time = new Date().setHours(12, 0);
    const convertedTime = toDayTime(time);
    expect(convertedTime).toEqual("12:00");
  });
});
