// 标准时间转换成 y-m-d h:m:s
export function transfromTime(time: string): string {
  console.log(time);
  const date = new Date(time);
  const y = date.getFullYear();
  let m = `${date.getMonth() + 1}`;
  m = Number(m) < 10 ? `0${m}` : m;
  let d = `${date.getDate()}`;
  d = Number(d) < 10 ? "0" + d : d;
  let h = `${date.getHours()}`;
  h = Number(h) < 10 ? "0" + h : h;
  let minute = `${date.getMinutes()}`;
  minute = Number(minute) < 10 ? "0" + minute : minute;
  let second = `${date.getSeconds()}`;
  second = Number(second) < 10 ? "0" + second : second;
  return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
}
