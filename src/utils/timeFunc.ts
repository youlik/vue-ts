export function transfromTime(time: string) {
  const times = new Date(time);
  const year = times.getFullYear(),
    month = times.getMonth() + 1,
    day = times.getDate(),
    hour = times.getHours(),
    minutes = times.getMinutes();
  return `${year}-${month}-${day} ${hour}:${minutes}`;
}
