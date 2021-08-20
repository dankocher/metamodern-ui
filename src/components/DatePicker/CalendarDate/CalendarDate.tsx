import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useState } from "react";

import styled from "styled-components";

import { MetCalendarDateProps } from "./CalendarDateProps";

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
    color: ${(props) => props.dayColor};
  }

  & div:hover:not(.${styles.selectedDay}) {
    background-color: ${(props) => props.dayHoverBgColor};
  }

  .${styles.presentDay} {
    border-color: ${(props) => props.dayBgColor};
  }

  .${styles.selectedDay} {
    color: ${(props) => props.selectedDayColor};
    background-color: ${(props) => props.dayBgColor};
  }

  .${styles.nextMonth} {
    color: ${(props) => props.anotherMonthDayColor};
  }
`;

export const CalendarDate: FC<MetCalendarDateProps> = ({
  /*Styles*/
  dateFontClass = "",
  calendarFontClass = "",
  showDate,
  selectedDate,
  setSelectedDate,
  currentDate,
  setIsOpen,
  /*Icons*/
  defaultArrowIcon,
  /*Colors*/
  calendarTitleColor,
  hoverTitleColor,
  weekDayNamesColor,
  dayColor,
  dayHoverBgColor,
  dayBgColor,
  selectedDayColor,
  anotherMonthDayColor,
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

  const handleDayClick = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date));
    //setIsOpen(false);
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

        <div className={calendarFontClass} onClick={() => {}}>
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
          dayColor={dayColor}
          dayHoverBgColor={dayHoverBgColor}
          dayBgColor={dayBgColor}
          selectedDayColor={selectedDayColor}
          anotherMonthDayColor={anotherMonthDayColor}
        >
          {dates.length > 0 &&
            dates.map((week) =>
              week.map((each) => (
                <div
                  key={each.valueOf()}
                  className={classNames(calendarFontClass, {
                    [styles.presentDay]: areEqual(each, currentDate),
                    [styles.selectedDay]: areEqual(each, selectedDate),
                    [styles.nextMonth]: each.month !== calendar.month,
                  })}
                  onClick={() => handleDayClick(each)}
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
