import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export function formatPostDate(utcTime: string) {
  return dayjs.utc(utcTime).local().fromNow();
}

export function formatPublishDate(utcTime: string) {
  return dayjs.utc(utcTime).local().format("MMMM D, YYYY");
}
