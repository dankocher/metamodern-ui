import styles from "./index.module.scss";
import React, { FC, ReactElement, useState } from "react";

import styled from "styled-components";

import { TypesDatePicker as Type } from "../index";

import { CalendarFull } from "../CalendarFull/CalendarFull";
import { CalendarShort } from "../CalendarShort/CalendarShort";

import { CalendarProps } from "./CalendarProps";

const Container = styled.div`
  background-color: ${(props) => props.bgColor};
`;

export const Calendar: FC<CalendarProps> = ({
  onChange,
  dateFontClass,
  calendarFontClass,

  setIsOpen,
  showDate,
  currentDate,
  selectedDate,
  setSelectedDate,
  type,

  defaultArrowIcon,

  bgColor,
  calendarTitleColor,
  hoverTitleColor,
  weekDayNamesColor,
  calendarColor,
  calendarHoverBgColor,
  calendarBgColor,
  selectedDateColor,
  anotherDateColor,
}): ReactElement => {
  const [isFullCalendarOpen, setIsFullCalendarOpen] = useState(true);

  const Props = () => ({
    onChange,
    type,
    dateFontClass,
    calendarFontClass,
    setIsOpen,
    showDate,
    selectedDate,
    setSelectedDate,
    currentDate,
    isFullCalendarOpen,
    defaultArrowIcon,
    calendarTitleColor,
    hoverTitleColor,
    weekDayNamesColor,
    calendarColor,
    calendarHoverBgColor,
    calendarBgColor,
    selectedDateColor,
    anotherDateColor,
    setIsFullCalendarOpen,
  })

  return (
    <Container className={styles.container} bgColor={bgColor}>
      {type === Type.FULL && isFullCalendarOpen && (
        <CalendarFull {...Props()} />
      )}
      {(type === Type.SHORT || !isFullCalendarOpen) && (
        <CalendarShort {...Props()} />
      )}
    </Container>
  );
};
