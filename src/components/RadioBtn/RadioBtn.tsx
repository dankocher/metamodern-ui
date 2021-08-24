import styles from "./index.module.scss";
import React, { FC, ReactElement, useState } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRadioBtnProps } from "./index";

const classNames = require("classnames");

const Container = styled.div`
  :not(.${styles.disabled}) {
    > label:hover {
      background-color: ${(props) => props.hoverColor};
    }

    .${styles.radioBtn} {
      border-color: ${(props) => props.radioButtonColor};
    }

    .${styles.circle} {
      background-color: ${(props) => props.radioButtonColor};
    }

    &.${styles.error} {
      span {
        color: ${(props) => props.errorColor};
      }

      .${styles.circle} {
        background-color: ${(props) => props.errorColor};
      }

      .${styles.radioBtn} {
        border-color: ${(props) => props.errorColor};
      }
    }
  }

  .${styles.item} {
    background-color: ${(props) => props.bgColor};
  }
`;

export const MetRadioBtn: FC<MetRadioBtnProps> = ({
  style,
  className = "",
  selectBtnId = "",
  items,
  labelFontClass = "subtitle3",
  onChange,
  radioButtonColor = colors.neutral800,
  bgColor = colors.transparent,
  errorColor = colors.red200,
  hoverColor = colors.neutral200,
  isDisabled = false,
  isError = false,
}): ReactElement => {

  const [id, setId] = useState(selectBtnId);

  const onChangeHandler = (event) => {
    if (onChange == null) return;
    setId(event.target.id);
    onChange(event);
  };

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
      radioButtonColor={radioButtonColor}
      errorColor={errorColor}
      selectBtnId={selectBtnId}
      disabled={isDisabled}
      isError={isError}
    >
      {items.map((item) => (
          <label htmlFor={item.id} className={styles.item} key={item.id}>
          <input
            checked={item.id == id ? true : false}
            disabled={isDisabled}
            type="radio"
            name="radio"
            id={item.id}
            value={item.value}
            onChange={onChangeHandler}
          />
            <div className={styles.radioBtn}>
              <div className={styles.circle} />
            </div>
            <span className={`${styles.content} ${labelFontClass}`}>
              {item.label}
            </span>
          </label>
      ))}
    </Container>
  );
};
