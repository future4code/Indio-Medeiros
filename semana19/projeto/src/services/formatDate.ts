import dayjs from "dayjs";

export function dateGenerator(): string {
  const dateFormat = dayjs().format("YYYY/MM/DD");
  return dateFormat;
}

export function reFormatDate(dateString: string): string {
  const dateFormat = dayjs(dateString).format("DD/MM/YYYY");
  return dateFormat;
}
