import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import ptbr from "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.locale(ptbr);

export const publishedDateRelativeToNow = (publishedAt: Date) => {
  const data = new Date(publishedAt);
  const now = dayjs();
  const dateFormatted = dayjs(data);
  return `Publicado ${dateFormatted.from(now)}`;
};

export const formatDateMonthYear = (date: Date) => {
  const dateFormatted = dayjs(date).format("DD [de] MMMM [às] HH:mm [de] YYYY");
  return dateFormatted;
};
