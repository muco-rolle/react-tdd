export const toDayTime = (date: number): string => {
  const [h, m] = new Date(date).toTimeString().split(":");
  return `${h}:${m}`;
};
