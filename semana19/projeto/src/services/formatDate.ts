import dayjs from "dayjs";


export  function formatDate(): string {
    
  const dateFormat = dayjs().format("YYYY/MM/DD");
  return dateFormat;
}