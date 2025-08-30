import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useState } from "react";

import styled from "styled-components";

import { CalendarProps } from "../Calendar";
import MetIcon from "../../Icon";

import { colors } from "../../styles/colors";

const classNames = require("classnames");
const { datesGenerator } = require("dates-generator");

interface HeaderProps {
  headerColor: string;
  headerHoverColor: string;
}

const Header = styled.div<HeaderProps>`
  button:hover {
    svg > * {
      fill: ${(props) => props.headerHoverColor};
    }
  }

  div {
    color: ${(props) => props.headerColor};

    :hover {
      color: ${(props) => props.headerHoverColor};
    }
  }
`;

interface WeekProps {
  weekDayFontColor: string;
}

const Week = styled.div<WeekProps>`
  div {
    color: ${(props) => props.weekDayFontColor};
  }
`;

interface DaysProps {
  primaryFontColor?: string;
  hoverDateBgColor: string;
  selectedColor: string;
  selectedFontColor: string;
  secondaryFontColor: string;
}

const Days = styled.div<DaysProps>`
  div:not(.${styles.nextMonth}, .${styles.selectedDay}) {
    color: ${(props) => props.primaryFontColor || colors.neutral900};
  }

  div:hover:not(.${styles.selectedDay}) {
    background-color: ${(props) => props.hoverDateBgColor};
  }

  .${styles.presentDay} {
    border-color: ${(props) => props.selectedColor};
  }

  .${styles.selectedDay} {
    color: ${(props) => props.selectedFontColor};
    background-color: ${(props) => props.selectedColor};
  }

  .${styles.nextMonth} {
    color: ${(props) => props.secondaryFontColor};
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
  moment,
  arrowIcon,
  headerColor,
  headerHoverColor,
  weekDayFontColor,
  primaryFontColor,
  hoverDateBgColor,
  selectedColor,
  selectedFontColor,
  secondaryFontColor,
}): ReactElement => {
  const firstDayOfWeek = moment.localeData().firstDayOfWeek();

  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
    nextMonth: null,
    nextYear: null,
    previousMonth: null,
    previousYear: null,
  });

  const areEqualDates = (firstValue, secondValue) => {
    if (!firstValue || !secondValue) return false;

    return (
      firstValue.year === secondValue.getFullYear() &&
      firstValue.month === secondValue.getMonth() &&
      firstValue.date === secondValue.getDate()
    );
  };

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
      startingDay: firstDayOfWeek,
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
    const body = {
      month: calendar.previousMonth,
      year: calendar.previousYear,
      startingDay: firstDayOfWeek,
    };
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
    const body = {
      month: calendar.nextMonth,
      year: calendar.nextYear,
      startingDay: firstDayOfWeek,
    };
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
        headerColor={headerColor}
        headerHoverColor={headerHoverColor}
      >
        <button onClick={handlePrevMonthButtonClick}>
          <MetIcon icon={arrowIcon} color={headerColor} size={24} />
        </button>

        <div
          className={calendarFontClass}
          onClick={() => {
            setIsFullCalendarOpen(false);
          }}
        >
          {`${moment.months()[calendar.month]} ${calendar.year}`}
        </div>

        <button
          className={styles.arrowRight}
          onClick={handleNextMonthButtonClick}
        >
          <MetIcon icon={arrowIcon} color={headerColor} size={24} />
        </button>
      </Header>

      <div className={styles.calendar}>
        <Week className={styles.week} weekDayFontColor={weekDayFontColor}>
          {moment.weekdaysMin(true).map((name) => (
            <div className={dateFontClass} key={name}>
              {name}
            </div>
          ))}
        </Week>

        <Days
          className={styles.days}
          primaryFontColor={primaryFontColor}
          hoverDateBgColor={hoverDateBgColor}
          selectedColor={selectedColor}
          selectedFontColor={selectedFontColor}
          secondaryFontColor={secondaryFontColor}
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
