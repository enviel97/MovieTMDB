import Moment from "moment";

export const formatDate = (date: string, option?: { format?: string }) => {
  const { format = "MMM, Do yyyy" } = option ?? {};
  const _date = Moment(date).format(format);
  return _date;
};
