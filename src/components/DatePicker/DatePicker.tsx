import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetDatePickerProps, TypesDatePicker as Type } from "./index";

import calendarIcon from "../../assets/icons/calendar-icon";
import arrowIcon from "../../assets/icons/arrow-icon";

import { Calendar } from "./Calendar/Calendar";

import moment from "./helpers/momentSettings";

const Container = styled.div`
  .${styles.date} {
    border-color: ${(props) => props.mainColor};

    background-color: ${(props) => props.bgColor};

    svg > * {
      fill: ${(props) => props.mainColor};
    }

    span {
      color: ${(props) => props.mainColor};
    }

    :hover {
      border-color: ${(props) => props.mainHoverColor};

      svg > * {
        fill: ${(props) => props.mainHoverColor};
      }

      span {
        color: ${(props) => props.mainHoverColor};
      }
    }
  }
`;

export const MetDatePicker: FC<MetDatePickerProps> = ({
  onChange,
  style,
  className = "",
  dateFontClass = "",
  calendarFontClass = "",
  defaultSelectedDate = new Date().valueOf(),
  type = Type.FULL,
  defaultCalendarIcon = calendarIcon,
  defaultArrowIcon = arrowIcon,
  mainColor = colors.neutral700,
  bgColor = colors.neutral0,
  mainHoverColor = colors.neutral800,
  headerColor = colors.neutral800,
  headerHoverColor = colors.neutral900,
  weekDayFontColor = colors.neutral600,
  primaryFontColor,
  hoverDateBgColor = colors.neutral200,
  selectedColor = colors.neutral800,
  selectedFontColor = colors.neutral0,
  secondaryFontColor = colors.neutral300,
}): ReactElement => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date(defaultSelectedDate));

  const onToggleIsOpen = () => setIsOpen(prevIsOpen => !prevIsOpen);

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
      <div className={styles.date} onClick={onToggleIsOpen}>
        {defaultCalendarIcon}
        <span className={dateFontClass}>
          {type === Type.FULL
            ? moment(selectedDate).format("DD.MM.YYYY")
            : moment(selectedDate).format("MMMM YYYY")}
        </span>
      </div>

      {isOpen && (
        <Calendar
          onChange={onChange}
          dateFontClass={dateFontClass}
          calendarFontClass={calendarFontClass}
          type={type}
          setIsOpen={setIsOpen}
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          defaultArrowIcon={defaultArrowIcon}
          bgColor={bgColor}
          headerColor={headerColor}
          headerHoverColor={headerHoverColor}
          weekDayFontColor={weekDayFontColor}
          primaryFontColor={primaryFontColor}
          hoverDateBgColor={hoverDateBgColor}
          selectedColor={selectedColor}
          selectedFontColor={selectedFontColor}
          secondaryFontColor={secondaryFontColor}
        />
      )}
    </Container>
  );
};
