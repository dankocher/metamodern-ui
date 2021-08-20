import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetDatePickerProps, TypesDatePicker as Type } from "./index";

import calendarIcon from "../../assets/icons/calendar-icon";
import arrowIcon from "../../assets/icons/arrow-icon";

import { monthNames } from "./utils/defaultData";
import { getDayFormat, getMonthFormat } from "./utils/calendar";
import { Calendar } from "./Calendar/Calendar";

const Container = styled.div`
  & .${styles.date} {
    border-color: ${(props) => props.mainColor};

    background-color: ${(props) => props.bgColor};

    & svg > * {
      fill: ${(props) => props.mainColor};
    }

    & span {
      color: ${(props) => props.mainColor};
    }

    &:hover {
      border-color: ${(props) => props.mainHoverColor};

      & svg > * {
        fill: ${(props) => props.mainHoverColor};
      }

      & span {
        color: ${(props) => props.mainHoverColor};
      }
    }
  }
`;

export const MetDatePicker: FC<MetDatePickerProps> = ({
  /*Styles*/
  style,
  className = "",
  dateFontClass = "",
  calendarFontClass = "",
  /**/
  type = Type.DATE,
  /*Icons*/
  defaultCalendarIcon = calendarIcon,
  defaultArrowIcon = arrowIcon,
  /*Colors*/
  mainColor = colors.neutral700,
  bgColor = colors.neutral0,
  mainHoverColor = colors.neutral800,
  /*Color calender date*/
  calendarTitleColor = colors.neutral800,
  hoverTitleColor = colors.neutral900,
  weekDayNamesColor = colors.neutral600,
  dayColor = colors.neutral900,
  dayHoverBgColor = colors.neutral200,
  dayBgColor = colors.neutral800,
  selectedDayColor = colors.neutral0,
  anotherMonthDayColor = colors.neutral300,
}): ReactElement => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const showDate = selectedDate || currentDate;

  const toggleCalendar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Container
      ref={wrapperRef}
      style={style}
      className={`${className} ${styles.container}`}
      mainColor={mainColor}
      bgColor={bgColor}
      mainHoverColor={mainHoverColor}
    >
      <div className={styles.date} onClick={toggleCalendar}>
        {defaultCalendarIcon}
        <span className={dateFontClass}>
          {type === Type.DATE
            ? `${getDayFormat(showDate)}.${getMonthFormat(
              showDate
              )}.${showDate.getFullYear()}`
            : `${monthNames[showDate.getMonth()]} ${showDate.getFullYear()}`}
        </span>
      </div>

      {isOpen && <Calendar
        /*Font*/
          dateFontClass={dateFontClass}
          calendarFontClass={calendarFontClass}
        /*Data*/
          type={type}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentDate={currentDate}
          showDate={showDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        /*Icons*/
          defaultArrowIcon={defaultArrowIcon}
        /*Colors*/
          bgColor={bgColor}
          calendarTitleColor={calendarTitleColor}
          hoverTitleColor={hoverTitleColor}
          weekDayNamesColor={weekDayNamesColor}
          dayColor={dayColor}
          dayHoverBgColor={dayHoverBgColor}
          dayBgColor={dayBgColor}
          selectedDayColor={selectedDayColor}
          anotherMonthDayColor={anotherMonthDayColor}
      />}
    </Container>
  );
};
