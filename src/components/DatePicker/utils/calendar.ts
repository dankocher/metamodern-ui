const areEqual = (a: {date: number, month: number, year: number}, b: Date) => {
  if (!a || !b) return false;

  return (
    a.year === b.getFullYear() &&
    a.month === b.getMonth() &&
    a.date === b.getDate()
  );
};

const getDayFormat = (date) => {
  return date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
};

const getMonthFormat = (date) => {
  const month = date.getMonth() + 1;
  return month > 9 ? month : `0${month}`;
};

export { areEqual, getDayFormat, getMonthFormat };
