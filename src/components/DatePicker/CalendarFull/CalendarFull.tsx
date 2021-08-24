import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useState } from "react";

import styled from "styled-components";

import { CalendarProps } from "../Calendar";

import { monthNames, weekDayNames } from "../helpers/constants";
import { areEqualDates } from "../helpers/calendar";
import { colors } from "../../styles/colors";

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
    color: ${(props) => props.primaryColor || colors.neutral900};
  }

  & div:hover:not(.${styles.selectedDay}) {
    background-color: ${(props) => props.hoverDateBgColor};
  }

  .${styles.presentDay} {
    border-color: ${(props) => props.extraColor};
  }

  .${styles.selectedDay} {
    color: ${(props) => props.selectedDateColor};
    background-color: ${(props) => props.extraColor};
  }

  .${styles.nextMonth} {
    color: ${(props) => props.secondaryDateColor};
  }
`;

export const CalendarFull: FC<CalendarProps> = ({
  onChange,
  dateFontClass = "",
  calendarFontClass = "",
  selectedDate,
  setSelectedDate,
  currentDate,
  setIsOpen,
  setIsFullCalendarOpen,
  defaultArrowIcon,
  calendarTitleColor,
  hoverTitleColor,
  weekDayNamesColor,
  primaryColor,
  hoverDateBgColor,
  extraColor,
  selectedDateColor,
  secondaryDateColor,
}): ReactElement => {
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
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
    if (date.month < calendar.month) {
      handlePrevMonthButtonClick();
    } else if (date.month > calendar.month) {
      handleNextMonthButtonClick();
    } else {
      const newDate = new Date(date.year, date.month, date.date);
      onChange(event, newDate.valueOf());
      setSelectedDate(newDate);
      setIsOpen(false);
    }
  };

  const getStyles = (day) => {
    return classNames(calendarFontClass, {
      [styles.presentDay]: areEqualDates(day, currentDate),
      [styles.selectedDay]: areEqualDates(day, selectedDate),
      [styles.nextMonth]: day.month !== calendar.month,
    });
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

        <div
          className={calendarFontClass}
          onClick={() => {
            setIsFullCalendarOpen(false);
          }}
        >
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
          primaryColor={primaryColor}
          hoverDateBgColor={hoverDateBgColor}
          extraColor={extraColor}
          selectedDateColor={selectedDateColor}
          secondaryDateColor={secondaryDateColor}
        >
          {dates.length > 0 &&
            dates.map((week) =>
              week.map((day) => (
                <div
                  key={day.date}
                  className={getStyles(day)}
                  onClick={(event) => handleDayClick(event, day)}
                >
                  {day.date}
                </div>
              ))
            )}
        </Days>
      </div>
    </>
  );
};
