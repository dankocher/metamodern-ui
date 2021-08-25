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
  currentDate,
  selectedDate,
  setSelectedDate,
  type,
  defaultArrowIcon,
  bgColor,
  headerColor,
  headerHoverColor,
  weekDayFontColor,
  primaryFontColor,
  hoverDateBgColor,
  selectedColor,
  selectedFontColor,
  secondaryFontColor,
}): ReactElement => {
  const [isFullCalendarOpen, setIsFullCalendarOpen] = useState(true);

  const Props = () => ({
    onChange,
    type,
    dateFontClass,
    calendarFontClass,
    setIsOpen,
    selectedDate,
    setSelectedDate,
    currentDate,
    isFullCalendarOpen,
    defaultArrowIcon,
    headerColor,
    headerHoverColor,
    weekDayFontColor,
    primaryFontColor,
    hoverDateBgColor,
    selectedColor,
    selectedFontColor,
    secondaryFontColor,
    setIsFullCalendarOpen,
  });

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
