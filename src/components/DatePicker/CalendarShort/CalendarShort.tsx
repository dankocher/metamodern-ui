import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useState } from "react";

import styled from "styled-components";

import { TypesDatePicker as Type } from "../index";

import { CalendarProps } from "../Calendar";

import { colors } from "../../styles/colors";

import moment from "../helpers/momentSettings";

const classNames = require("classnames");

const Container = styled.div`
  h1 {
    color: ${(props) => props.headerColor};

    .${styles.year}:hover {
      color: ${(props) => props.headerHoverColor};
    }
  }

  div div:not(.${styles.nextDate}, .${styles.selectedDate}) {
    color: ${(props) => props.primaryFontColor || colors.neutral800};

    :hover {
      background-color: ${(props) => props.hoverDateBgColor};
    }
  }

  .${styles.presentDate} {
    border-color: ${(props) => props.selectedColor};
  }

  .${styles.selectedDate} {
    color: ${(props) => props.selectedFontColor};
    background-color: ${(props) => props.selectedColor};
  }

  .${styles.nextDate} {
    color: ${(props) => props.secondaryFontColor};
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
  headerColor,
  headerHoverColor,
  primaryFontColor,
  hoverDateBgColor,
  selectedColor,
  selectedFontColor,
  secondaryFontColor,
}): ReactElement => {
  const [isYearOpen, setIsYearOpen] = useState(true);
  const [yearList, setYearList] = useState([]);

  const getYearArr = () => {
    const yearArr = [];
    const currentYear = moment().year();
    for (let i = currentYear - 7; i <= currentYear + 4; i++) {
      yearArr.push(i);
    }
    setYearList(yearArr);
  };

  useEffect(() => {
    getYearArr();
  }, []);

  const handleYearClick = (year) => {
    if (year > new Date().getFullYear()) return false;
    setSelectedDate(new Date(year, selectedDate.getMonth(), selectedDate.getDate()));
    setIsYearOpen(false);
  };

  const handleMonthClick = (event, month) => {
    if (type === Type.FULL) {
      const newDate = new Date(selectedDate.getFullYear(), month, selectedDate.getDate());

      setSelectedDate(newDate);
      setIsFullCalendarOpen(true);
    } else {
      const newDate = new Date(selectedDate.getFullYear(), month, 1);

      onChange(event, newDate.valueOf());
      setSelectedDate(newDate);
      setIsOpen(false);
    }
  };

  const toggleYear = () => setIsYearOpen(true);

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
      headerColor={headerColor}
      headerHoverColor={headerHoverColor}
      primaryFontColor={primaryFontColor}
      hoverDateBgColor={hoverDateBgColor}
      selectedColor={selectedColor}
      selectedFontColor={selectedFontColor}
      secondaryFontColor={secondaryFontColor}
    >
      {isYearOpen ? (
        <>
          <h1 className={calendarFontClass}>Выберите год</h1>
          <div>
            {yearList.map(year => (
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
            {moment.months().map((name, index) => (
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
