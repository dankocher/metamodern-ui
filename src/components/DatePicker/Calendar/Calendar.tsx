import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { TypesDatePicker as Type } from "../index";
import { CalendarDate } from "../CalendarDate/CalendarDate";
import { CalendarMonth } from "../CalendarMonth/CalendarMonth";

const Container = styled.div`
  background-color: ${(props) => props.bgColor};
`;

export const Calendar = ({
  dateFontClass,
  calendarFontClass,

  showDate,
  currentDate,
  selectedDate,
  setSelectedDate,
  isOpen,
  setIsOpen,
  type,

  defaultArrowIcon,

  bgColor,
  calendarTitleColor,
  hoverTitleColor,
  weekDayNamesColor,
  dayColor,
  dayHoverBgColor,
  dayBgColor,
  selectedDayColor,
  anotherMonthDayColor,
}): ReactElement => {
  return (
    <Container className={styles.container} bgColor={bgColor}>
      {type === Type.DATE ? (
        <CalendarDate
          /*Font*/
          dateFontClass={dateFontClass}
          calendarFontClass={calendarFontClass}
          /*Data*/
          setIsOpen={setIsOpen}
          showDate={showDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentDate={currentDate}
          /*Icons*/
          defaultArrowIcon={defaultArrowIcon}
          /*Colors*/
          calendarTitleColor={calendarTitleColor}
          hoverTitleColor={hoverTitleColor}
          weekDayNamesColor={weekDayNamesColor}
          dayColor={dayColor}
          dayHoverBgColor={dayHoverBgColor}
          dayBgColor={dayBgColor}
          selectedDayColor={selectedDayColor}
          anotherMonthDayColor={anotherMonthDayColor}
        />
      ) : (
        <CalendarMonth
          /*Font*/
          calendarFontClass={calendarFontClass}
          /*Data*/
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentDate={currentDate}
          showDate={showDate}
          setSelectedDate={setSelectedDate}
          /*Icons*/
          defaultArrowIcon={defaultArrowIcon}
          /*Colors*/
          calendarTitleColor={calendarTitleColor}
          hoverTitleColor={hoverTitleColor}
          dayColor={dayColor}
          dayHoverBgColor={dayHoverBgColor}
          dayBgColor={dayBgColor}
          selectedDayColor={selectedDayColor}
          anotherMonthDayColor={anotherMonthDayColor}
        />
      )}
    </Container>
  );
};
