import { monthNames } from "./defaultData";

const areEqual = (a: {date: number, month: number, year: number}, b: Date) => {
  if (!a || !b) return false;

  return (
    a.year === b.getFullYear() &&
    a.month === b.getMonth() &&
    a.date === b.getDate()
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

export { areEqual, getFullFormat, getShortFormat };
