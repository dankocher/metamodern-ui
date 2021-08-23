import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useState } from "react";

import styled from "styled-components";

import { CalendarProps } from "../Calendar";

import { monthNames, weekDayNames } from "../utils/defaultData";
import { areEqual } from "../utils/calendar";

const classNames = require("classnames");
const { datesGenerator } = require("dates-generator");

const Header = styled.header`
  & button {
    svg > * {
      fill: ${(props) => props.calendarTitleColor};
    }

    &:hover {
      & svg > * {
        fill: ${(props) => props.hoverTitleColor};
      }
    }
  }

  & div {
    color: ${(props) => props.calendarTitleColor};

    &:hover {
      color: ${(props) => props.hoverTitleColor};
    }
  }
`;

const Week = styled.div`
  & div {
    color: ${(props) => props.weekDayNamesColor};
  }
`;

const Days = styled.div`
  & div:not(.${styles.nextMonth}, .${styles.selectedDay}) {
    color: ${(props) => props.calendarColor};
  }

  & div:hover:not(.${styles.selectedDay}) {
    background-color: ${(props) => props.calendarHoverBgColor};
  }

  .${styles.presentDay} {
    border-color: ${(props) => props.calendarBgColor};
  }

  .${styles.selectedDay} {
    color: ${(props) => props.selectedDateColor};
    background-color: ${(props) => props.calendarBgColor};
  }

  .${styles.nextMonth} {
    color: ${(props) => props.anotherDateColor};
  }
`;

export const CalendarFull: FC<CalendarProps> = ({
  onChange,
  /*Styles*/
  dateFontClass = "",
  calendarFontClass = "",
  showDate,
  selectedDate,
  setSelectedDate,
  currentDate,
  setIsOpen,
  setIsFullCalendarOpen,
  /*Icons*/
  defaultArrowIcon,
  /*Colors*/
  calendarTitleColor,
  hoverTitleColor,
  weekDayNamesColor,
  calendarColor,
  calendarHoverBgColor,
  calendarBgColor,
  selectedDateColor,
  anotherDateColor,
}): ReactElement => {
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: showDate.getMonth(),
    year: showDate.getFullYear(),
    nextMonth: null,
    nextYear: null,
    previousMonth: null,
    previousYear: null,
  });

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
    };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  }, []);

  const handlePrevMonthButtonClick = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  const handleNextMonthButtonClick = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  const handleDayClick = (event, date) => {
    const newDate = new Date(date.year, date.month, date.date);

    onChange(event, newDate.valueOf());
    setSelectedDate(newDate);
    setIsOpen(false);
  };

  return (
    <>
      <Header
        className={styles.header}
        calendarTitleColor={calendarTitleColor}
        hoverTitleColor={hoverTitleColor}
        weekDayNamesColor={weekDayNamesColor}
      >
        <button onClick={handlePrevMonthButtonClick}>{defaultArrowIcon}</button>

        <div className={calendarFontClass} onClick={() => {setIsFullCalendarOpen(false)}}>
          {`${monthNames[calendar.month]} ${calendar.year}`}
        </div>

        <button
          className={styles.arrowRight}
          onClick={handleNextMonthButtonClick}
        >
          {defaultArrowIcon}
        </button>
      </Header>

      <div className={styles.calendar}>
        <Week className={styles.week} weekDayNamesColor={weekDayNamesColor}>
          {weekDayNames.map((name) => (
            <div className={dateFontClass} key={name}>
              {name}
            </div>
          ))}
        </Week>

        <Days
          className={styles.days}
          calendarColor={calendarColor}
          calendarHoverBgColor={calendarHoverBgColor}
          calendarBgColor={calendarBgColor}
          selectedDateColor={selectedDateColor}
          anotherDateColor={anotherDateColor}
        >
          {dates.length > 0 &&
            dates.map((week) =>
              week.map((each) => (
                <div
                  key={each.date}
                  className={classNames(calendarFontClass, {
                    [styles.presentDay]: areEqual(each, currentDate),
                    [styles.selectedDay]: areEqual(each, selectedDate),
                    [styles.nextMonth]: each.month !== calendar.month,
                  })}
                  onClick={(event) => handleDayClick(event, each)}
                >
                  {each.date}
                </div>
              ))
            )}
        </Days>
      </div>
    </>
  );
};
