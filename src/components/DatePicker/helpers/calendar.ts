import { monthNames } from "./constants";

const areEqualDates = (firstValue: {date: number, month: number, year: number}, secondValue: Date) => {
  if (!firstValue || !secondValue) return false;

  return (
    firstValue.year === secondValue.getFullYear() &&
    firstValue.month === secondValue.getMonth() &&
    firstValue.date === secondValue.getDate()
  );
};

const getFullFormat = (date) => {
  const realMonth =  date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = realMonth > 9 ? realMonth : `0${realMonth}`;

  return `${day}.${month}.${date.getFullYear()}`
};

const getShortFormat = (date) => {
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
}

export { areEqualDates, getFullFormat, getShortFormat };
