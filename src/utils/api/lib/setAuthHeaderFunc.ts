import md5 from "md5";

// env const in future
const password = "Valantis";

export const setAuthHeader = () => {
  const date = new Date();
  const currentMonth = date.getUTCMonth() + 1;
  const currentDay = date.getUTCDate();
  const currentMonthLength = String(currentMonth).length;
  const currentDayLength = String(currentDay).length;

  const md5String = `${password}_${date.getUTCFullYear()}${currentMonthLength < 2 ? "0" : ""}${currentMonth}${currentDayLength < 2 ? "0" : ""}${currentDay}`;

  return md5(md5String);
};
