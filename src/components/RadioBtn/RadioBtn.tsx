import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRadioBtnProps } from "./index";

import checkIcon from "../../assets/icons/check-icon";

const classNames = require("classnames");

const Container = styled.div`
  :not(.${styles.disabled}) {
    > div:hover {
      background-color: ${(props) => props.hoverColor};
    }

    .${styles.radioBtn} {
      border-color: ${(props) => props.circleColor};
    }

    &:not(&.${styles.error}) {
      .${styles.circle} {
        background-color: ${(props) => props.circleColor};
      }
    }
  
    &.${styles.error} {
      span {
        color: ${(props) => props.errorColor};
      }

      .${styles.radioBtn} {
        border-color: ${(props) => props.errorColor};
      }
    }
  }
  
  .${styles.itemContainer} {
    background-color: ${(props) => props.bgColor};
  }
`;

export const MetRadioBtn: FC<MetRadioBtnProps> = ({
  style,
  className = "",
  isChecked,
  items,
  labelFontClass,
  onChange,
  circleColor = colors.neutral800,
  bgColor = colors.transparent,
  errorColor = colors.red200,
  hoverColor = colors.neutral200,
  isDisabled = false,
  isError = false,
}): ReactElement => {
  const onChangeHandler = (e) => {
    if (onChange == null) return;
    onChange(e);
  };
  //В чекбоксе исправь шрифт и переименуй флаг бордеррадиуса в сторибук!!!
  //Вопрос про анимациюю вообще и конкретно для круга.
  const stateStyle = classNames(`${styles.container} ${className}`, {
    [styles.disabled]: isDisabled,
    [styles.error]: isError,
  });

  return (
    <Container
      style={style}
      className={stateStyle}
      hoverColor={hoverColor}
      bgColor={bgColor}
      circleColor={circleColor}
      errorColor={errorColor}
      checked={isChecked}
      disabled={isDisabled}
      isError={isError}
    >
      {items.map((item) => (
        <div className={styles.itemContainer} key={item.id}>
          <input
            disabled={isDisabled}
            type="radio"
            name="radio"
            id={item.id}
            value={item.value}
            onChange={onChangeHandler}
          />
          <label htmlFor={item.id} className={styles.item}>
            <div className={styles.radioBtn}>
              <div className={styles.circle} />
            </div>
            <span className={`${styles.content} ${labelFontClass}`}>
              {item.label}
            </span>
          </label>
        </div>
      ))}
    </Container>
  );
};
