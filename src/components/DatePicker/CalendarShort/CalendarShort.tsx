import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useState } from "react";

import styled from "styled-components";

import { TypesDatePicker as Type } from "../typesDatePicker.enum";

import { CalendarProps } from "../Calendar";
import MetIcon from "../../Icon";

import { colors } from "../../styles/colors";

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
  selectMonthLabel,
  selectYearLabel,
  setIsOpen,
  selectedDate,
  currentDate,
  setSelectedDate,
  setIsFullCalendarOpen,
  moment,
  arrowIcon,
  headerColor,
  headerHoverColor,
  primaryFontColor,
  hoverDateBgColor,
  selectedColor,
  selectedFontColor,
  secondaryFontColor,
}): ReactElement => {
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [yearList, setYearList] = useState([]);

  const getYearArr = () => {
    const yearArr: number[] = [];
    const currentYear = moment().year();
    for (let i = currentYear - 7; i <= currentYear + 4; i++) {
      yearArr.push(i);
    }
    setYearList(yearArr);
  };

  useEffect(getYearArr, []);

  const handleYearClick = (year) => {
    if (year > currentDate.getFullYear()) return false;

    const currentMonth = currentDate.getMonth();
    const selectedMonth = selectedDate.getMonth();
    const newSelectedMonth = year === currentDate.getFullYear() && selectedMonth > currentMonth
      ? currentMonth : selectedMonth;

    setSelectedDate(new Date(year, newSelectedMonth, selectedDate.getDate()));
    setIsYearOpen(false);
  };

  const handleMonthClick = (event, month) => {
    if (isCurrentMonth(month)) return false;
    let newSelectedDate: Date;
    if (type === Type.FULL) {
      newSelectedDate = new Date(selectedDate.getFullYear(), month, selectedDate.getDate());
      setIsFullCalendarOpen(true);
    } else {
      newSelectedDate = new Date(selectedDate.getFullYear(), month, 1);
      setIsOpen(false);
    }

    onChange(event, newSelectedDate.valueOf());
    setSelectedDate(newSelectedDate);
  };

  const toggleYear = () => setIsYearOpen(prevValue => !prevValue);

  const isCurrentMonth = (month) => {
    return month > currentDate.getMonth() && selectedDate.getFullYear() >= currentDate.getFullYear();
  }

  const isPresentMonth = (month) => {
    return month === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
  }

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
          <h1 className={calendarFontClass}>{selectYearLabel}</h1>
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
            <span className={styles.arrow}><MetIcon icon={arrowIcon} size={20} color={headerColor}/></span>
            <span>{selectMonthLabel}</span>
          </h1>

          <div>
            {moment.months().map((name, index) => (
              <div
                key={name}
                className={classNames(calendarFontClass, {
                  [styles.presentDate]: isPresentMonth(index),
                  [styles.selectedDate]: index === selectedDate.getMonth(),
                  [styles.nextDate]: isCurrentMonth(index),
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
