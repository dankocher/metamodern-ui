import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetCheckboxProps } from "./index";

import checkIcon from "../../assets/icons/check-icon";

const classNames = require("classnames");

const Label = styled.label`
  :not(.${styles.disabled}) {
    :hover {
      background-color: ${(props) => props.hoverColor};
    }

    input[type="checkbox"]:checked {
      + div {
        background-color: ${(props) => props.bgColor};
      }
    }

    div {
      border-color: ${(props) => props.borderColor};
    }
  }
`;

export const MetCheckbox: FC<MetCheckboxProps> = ({
  style,
  className = "",
  isChecked,
  labelFontClass,
  label,
  onChange,
  borderColor = colors.neutral700,
  bgColor = colors.neutral800,
  isDisabled = false,
  isRectangleHover = false,
  hoverColor = colors.neutral200,
  checkedIcon = checkIcon,
}): ReactElement => {
  const onChangeHandler = (e) => {
    if (onChange == null) return;
    onChange(e);
  };

  const stateStyle = classNames(`${styles.container} ${className}`, {
    [styles.disabled]: isDisabled,
    [styles.container__rounded]: isRectangleHover,
  });

  return (
    <Label
      style={style}
      className={stateStyle}
      hoverColor={hoverColor}
      bgColor={bgColor}
      borderColor={borderColor}
      checked={isChecked}
      disabled={isDisabled}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChangeHandler}
        disabled={isDisabled}
      />
      <div className={styles.checkbox}>{isChecked ? checkedIcon : null}</div>
      <span className={`${styles.content} ${labelFontClass}`}>{label}</span>
    </Label>
  );
};