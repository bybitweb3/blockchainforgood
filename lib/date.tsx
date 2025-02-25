import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export function formatPostDate(utcTime: string) {
  return getUTCTime(utcTime).fromNow();
}

export function formatPublishDate(utcTime: string) {
  return getUTCTime(utcTime).format("MMMM D, YYYY");
}

export function getUTCTime(utcTime: string | number) {
  return dayjs.utc(utcTime).local();
}
