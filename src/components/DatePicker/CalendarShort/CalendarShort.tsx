import styles from "./index.module.scss";
import React, { FC, ReactElement, useState } from "react";

import styled from "styled-components";

import { TypesDatePicker as Type } from "../index";

import { CalendarProps } from "../Calendar";

import { monthNames, years } from "../helpers/constants";
import { colors } from "../../styles/colors";

const classNames = require("classnames");

const Container = styled.div`
  & h1 {
    color: ${(props) => props.calendarTitleColor};

    & .${styles.year}:hover {
      color: ${(props) => props.hoverTitleColor};
    }
  }

  & div div:not(.${styles.nextDate}, .${styles.selectedDate}) {
    color: ${(props) => props.primaryColor || colors.neutral800};

    &:hover {
      background-color: ${(props) => props.hoverDateBgColor};
    }
  }

  .${styles.presentDate} {
    border-color: ${(props) => props.extraColor};
  }

  .${styles.selectedDate} {
    color: ${(props) => props.selectedDateColor};
    background-color: ${(props) => props.extraColor};
  }

  .${styles.nextDate} {
    color: ${(props) => props.secondaryDateColor};
  }
`;

export const CalendarShort: FC<CalendarProps> = ({
  onChange,
  type,
  calendarFontClass = "",
  setIsOpen,
  selectedDate,
  currentDate,
  setSelectedDate,
  setIsFullCalendarOpen,
  defaultArrowIcon,
  calendarTitleColor,
  hoverTitleColor,
  primaryColor,
  hoverDateBgColor,
  extraColor,
  selectedDateColor,
  secondaryDateColor,
}): ReactElement => {
  const [isYearOpen, setIsYearOpen] = useState(true);

  const handleYearClick = (year) => {
    if (year > new Date().getFullYear()) return false;
    setSelectedDate(
      new Date(year, selectedDate.getMonth(), selectedDate.getDate())
    );
    setIsYearOpen(false);
  };

  const handleMonthClick = (event, month) => {
    if (type === Type.FULL) {
      const newDate = new Date(
        selectedDate.getFullYear(),
        month,
        selectedDate.getDate()
      );

      setSelectedDate(newDate);
      setIsFullCalendarOpen(true);
    } else {
      const newDate = new Date(selectedDate.getFullYear(), month, 1);

      onChange(event, newDate.valueOf());
      setSelectedDate(newDate);
      setIsOpen(false);
    }
  };

  const toggleYear = () => {
    setIsYearOpen(true);
  };

  const getStyles = (year) => {
    return classNames(calendarFontClass, {
      [styles.presentDate]: year === currentDate.getFullYear(),
      [styles.selectedDate]: year === selectedDate.getFullYear(),
      [styles.nextDate]: year > currentDate.getFullYear(),
    });
  };

  return (
    <Container
      className={styles.container}
      calendarTitleColor={calendarTitleColor}
      hoverTitleColor={hoverTitleColor}
      primaryColor={primaryColor}
      hoverDateBgColor={hoverDateBgColor}
      extraColor={extraColor}
      selectedDateColor={selectedDateColor}
      secondaryDateColor={secondaryDateColor}
    >
      {isYearOpen ? (
        <>
          <h1 className={calendarFontClass}>Выберите год</h1>
          <div>
            {years.map((year) => (
              <div
                key={year}
                className={getStyles(year)}
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
              {selectedDate.getFullYear()}
            </span>
            <span className={styles.arrow}>{defaultArrowIcon}</span>
            <span>Выберите месяц</span>
          </h1>

          <div>
            {monthNames.map((name, index) => (
              <div
                key={name}
                className={classNames(calendarFontClass, {
                  [styles.presentDate]: index === currentDate.getMonth(),
                  [styles.selectedDate]: index === selectedDate.getMonth(),
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
