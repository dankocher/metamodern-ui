import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetDatePickerProps } from "./index";
import { TypesDatePicker as Type } from "./typesDatePicker.enum";

import { Calendar } from "./Calendar/Calendar";
import MetIcon, { Icons } from "../Icon";

import moment from "moment";
import classNames from "classnames";

const Container = styled.div`
  .${styles.date} {
    border-color: ${(props) => props.mainColor};

    background-color: ${(props) => props.bgColor};

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
  dateFontClass = styles.caption,
  calendarFontClass = styles.subtitle3,
  selectMonthLabel = "Select month",
  selectYearLabel = "Select year",
  defaultSelectedDate = new Date().valueOf(),
  type = Type.FULL,
  dateFormat = type === Type.FULL ? "DD.MM.YYYY" : "MMMM YYYY",
  language = window.navigator.language,
  calendarIcon = Icons.dateRangeOutlined,
  arrowIcon = Icons.arrowOutlined,
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
  //moment.locale(language);
  const setLocale = () => {
    moment.locale(language);
    console.log(language)
    console.log(moment.locale())
  };
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

  useEffect(setLocale, [language])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const dateStyle = classNames(styles.date, {
    [styles.date__full]: type === Type.FULL,
    [styles.date__short]: type === Type.SHORT,
  });

  return (
    <Container
      ref={wrapperRef}
      style={style}
      className={`${className} ${styles.container}`}
      mainColor={mainColor}
      bgColor={bgColor}
      mainHoverColor={mainHoverColor}
    >
      <div className={dateStyle} onClick={onToggleIsOpen}>
        <MetIcon icon={calendarIcon} color={mainColor} size={24}/>
        <span className={dateFontClass}>
          {type === Type.FULL
            ? moment(selectedDate).format(dateFormat)
            : moment(selectedDate).format(dateFormat)}
        </span>
      </div>

      {isOpen && (
        <Calendar
          onChange={onChange}
          dateFontClass={dateFontClass}
          calendarFontClass={calendarFontClass}
          selectMonthLabel={selectMonthLabel}
          selectYearLabel={selectYearLabel}
          type={type}
          setIsOpen={setIsOpen}
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          arrowIcon={arrowIcon}
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
