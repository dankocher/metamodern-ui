import styles from "./index.module.scss";
import React, { FC, ReactElement, useState } from "react";

import styled from "styled-components";

import { TypesDatePicker as Type } from "../typesDatePicker.enum";

import { CalendarFull } from "../CalendarFull/CalendarFull";
import { CalendarShort } from "../CalendarShort/CalendarShort";

import { CalendarProps } from "./Calendar.interface";

const Container = styled.div`
  background-color: ${(props) => props.bgColor};
`;

export const Calendar: FC<CalendarProps> = (props): ReactElement => {
  const [isFullCalendarOpen, setIsFullCalendarOpen] = useState(true);

  return (
    <Container className={styles.container} bgColor={props.bgColor}>
      {props.type === Type.FULL && isFullCalendarOpen && (
        <CalendarFull {...props} setIsFullCalendarOpen={setIsFullCalendarOpen} />)}
      {(props.type === Type.SHORT || !isFullCalendarOpen) && (
        <CalendarShort {...props} setIsFullCalendarOpen={setIsFullCalendarOpen} />)}
    </Container>
  );
};
