import styles from "./index.module.scss";
import React, { FC, ReactElement, useState } from "react";

import styled from "styled-components";

import { MetCalendarMonthProps } from "./CalendarMonthProps";
import { CURRENT_YEAR, monthNames, years } from "../utils/defaultData";

const classNames = require("classnames");

const Container = styled.div`
  & h1 {
    color: ${(props) => props.calendarTitleColor};

    & .${styles.year}:hover {
      color: ${(props) => props.hoverTitleColor};
    }
  }

  & div div:not(.${styles.nextYear}, .${styles.selectedYear}) {
    color: ${(props) => props.dayColor};

    &:hover {
      background-color: ${(props) => props.dayHoverBgColor};
    }
  }

  .${styles.selectedYear} {
    color: ${(props) => props.selectedDayColor};
    background-color: ${(props) => props.dayBgColor};
  }

  .${styles.nextYear} {
    color: ${(props) => props.anotherMonthDayColor};
  }
`;

export const CalendarMonth: FC<MetCalendarMonthProps> = ({
  calendarFontClass = "",
  /*Styles*/
  setIsOpen,
  showDate,
  setSelectedDate,
  /*Icons*/
  defaultArrowIcon,
  /*Colors*/
  calendarTitleColor,
  hoverTitleColor,
  dayColor,
  dayHoverBgColor,
  dayBgColor,
  selectedDayColor,
  anotherMonthDayColor,
}): ReactElement => {
  const [isYearOpen, setIsYearOpen] = useState(true);
  const [isMonthOpen, setIsMonthOpen] = useState(false);

  const handleYearClick = (year) => {
    if (year > CURRENT_YEAR) return false;
    setSelectedDate(new Date(year, showDate.getMonth(), showDate.getDate()));
    setIsMonthOpen(true);
    setIsYearOpen(false);
  };

  const handleMonthClick = (month) => {
    setSelectedDate(
      new Date(showDate.getFullYear(), month, showDate.getDate())
    );
    setIsOpen(false);
  };

  const toggleYear = () => {
    setIsMonthOpen(false);
    setIsYearOpen(true);
  };

  return (
    <Container
      className={styles.container}
      calendarTitleColor={calendarTitleColor}
      hoverTitleColor={hoverTitleColor}
      dayColor={dayColor}
      dayHoverBgColor={dayHoverBgColor}
      dayBgColor={dayBgColor}
      selectedDayColor={selectedDayColor}
      anotherMonthDayColor={anotherMonthDayColor}
    >
      {isYearOpen && (
        <>
          <h1 className={calendarFontClass}>Выберите год</h1>
          <div>
            {years.map(({ year, was }) => (
              <div
                key={year}
                className={classNames(calendarFontClass, {
                  [styles.selectedYear]: showDate.getFullYear() === year,
                  [styles.nextYear]: !was,
                })}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </>
      )}

      {isMonthOpen && (
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
                onClick={() => handleMonthClick(index)}
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
