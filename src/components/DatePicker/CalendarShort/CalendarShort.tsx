import styles from "./index.module.scss";
import React, { FC, ReactElement, useState } from "react";

import styled from "styled-components";

import { TypesDatePicker, TypesDatePicker as Type } from "../index";

import { CalendarProps } from "../Calendar";

import { monthNames, years } from "../utils/defaultData";

const classNames = require("classnames");

const Container = styled.div`
  & h1 {
    color: ${(props) => props.calendarTitleColor};

    & .${styles.year}:hover {
      color: ${(props) => props.hoverTitleColor};
    }
  }

  & div div:not(.${styles.nextYear}, .${styles.selectedYear}) {
    color: ${(props) => props.calendarColor};

    &:hover {
      background-color: ${(props) => props.calendarHoverBgColor};
    }
  }

  .${styles.selectedYear} {
    color: ${(props) => props.selectedDateColor};
    background-color: ${(props) => props.calendarBgColor};
  }

  .${styles.nextYear} {
    color: ${(props) => props.anotherDateColor};
  }
`;

export const CalendarShort: FC<CalendarProps> = ({
  onChange,
  type,
  calendarFontClass = "",
  /*Styles*/
  setIsOpen,
  showDate,
  currentDate,
  setSelectedDate,
  setIsFullCalendarOpen,
  /*Icons*/
  defaultArrowIcon,
  /*Colors*/
  calendarTitleColor,
  hoverTitleColor,
  calendarColor,
  calendarHoverBgColor,
  calendarBgColor,
  selectedDateColor,
  anotherDateColor,
}): ReactElement => {
  const [isYearOpen, setIsYearOpen] = useState(true);

  const handleYearClick = (year) => {
    if (year > new Date().getFullYear()) return false;
    setSelectedDate(new Date(year, showDate.getMonth(), showDate.getDate()));
    setIsYearOpen(false);
  };

  const handleMonthClick = (event, month) => {
    const newDate = new Date(showDate.getFullYear(), month, showDate.getDate());

    if (type === Type.FULL) {
      setSelectedDate(newDate);
      setIsFullCalendarOpen(true);
    } else {
      onChange(event, newDate.valueOf());
      setSelectedDate(newDate);
      setIsOpen(false);
    }
  };

  const toggleYear = () => {
    setIsYearOpen(true);
  };

  return (
    <Container
      className={styles.container}
      calendarTitleColor={calendarTitleColor}
      hoverTitleColor={hoverTitleColor}
      calendarColor={calendarColor}
      calendarHoverBgColor={calendarHoverBgColor}
      calendarBgColor={calendarBgColor}
      selectedDateColor={selectedDateColor}
      anotherDateColor={anotherDateColor}
    >
      {isYearOpen ? (
        <>
          <h1 className={calendarFontClass}>Выберите год</h1>
          <div>
            {years.map((year) => (
              <div
                key={year}
                className={classNames(calendarFontClass, {
                  [styles.selectedYear]: showDate.getFullYear() === year,
                  [styles.nextYear]: year > currentDate.getFullYear(),
                })}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className={calendarFontClass}>
            <span className={styles.year} onClick={toggleYear}>
              {showDate.getFullYear()}
            </span>
            <span className={styles.arrow}>{defaultArrowIcon}</span>
            <span>Выберите месяц</span>
          </h1>

          <div>
            {monthNames.map((name, index) => (
              <div
                key={name}
                className={classNames(calendarFontClass, {
                  [styles.selectedYear]: showDate.getMonth() === index,
                })}
                onClick={(event) => handleMonthClick(event, index)}
              >
                {name}
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};
