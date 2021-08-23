import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetDatePickerProps, TypesDatePicker as Type } from "./index";

import calendarIcon from "../../assets/icons/calendar-icon";
import arrowIcon from "../../assets/icons/arrow-icon";

import { Calendar } from "./Calendar/Calendar";

import { getFullFormat, getShortFormat } from "./utils/calendar";

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
  onChange,
  /*Styles*/
  style,
  className = "",
  dateFontClass = "",
  calendarFontClass = "",
  /**/
  type = Type.FULL,
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
  calendarColor = colors.neutral900,
  calendarHoverBgColor = colors.neutral200,
  calendarBgColor = colors.neutral800,
  selectedDateColor = colors.neutral0,
  anotherDateColor = colors.neutral300,
}): ReactElement => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
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
          {type === Type.FULL
            ? getFullFormat(showDate)
            : getShortFormat(showDate)}
        </span>
      </div>

      {isOpen && (
        <Calendar
          onChange={onChange}
          /*Font*/
          dateFontClass={dateFontClass}
          calendarFontClass={calendarFontClass}
          /*Data*/
          type={type}
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
          calendarColor={calendarColor}
          calendarHoverBgColor={calendarHoverBgColor}
          calendarBgColor={calendarBgColor}
          selectedDateColor={selectedDateColor}
          anotherDateColor={anotherDateColor}
        />
      )}
    </Container>
  );
};
