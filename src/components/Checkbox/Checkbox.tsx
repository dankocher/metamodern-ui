import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetCheckboxProps } from "./index";

import checkIcon from "../../assets/icons/check-icon";

const classNames = require("classnames");

const Label = styled.label`
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }

  div:not(+input:disabled){
    border-color: ${(props) => props.borderColor};
  }

  div{
    background-color: ${(props) =>
      props.checked && !props.disabled ? props.bgColor : null};
  }
`;

export const MetCheckbox: FC<MetCheckboxProps> = ({
  style,
  className = "",
  isChecked,
  content,
  onChange,
  borderColor = colors.neutral700,
  bgColor = colors.neutral800,
  isDisabled = false,
  hoverColor = colors.neutral200,
  hoverIconColor = colors.neutral700,
  checkedIcon = checkIcon,
}): ReactElement => {
  const onChangeHandler = (e) => {
    if (onChange == null) return;
    onChange(e);
  };

  const stateStyleContent = classNames(`${styles.content}`, {
    [styles.disabledContent]: isDisabled && !isChecked,
  });

  const stateStyleRectangle = classNames(`${styles.rectangle}`, {
    [styles.disabledRectangle]: isDisabled,
    [styles.disabledCheckedRectangle]: isDisabled && isChecked,
  });

  return (
    <Label
      style={style}
      className={`${styles.container} ${className}`}
      hoverColor={hoverColor}
      bgColor={bgColor}
      hoverIconColor={hoverIconColor}
      borderColor={borderColor}
      checked={isChecked}
      disabled={isDisabled}
    >
      <div className={stateStyleRectangle}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChangeHandler}
          disabled={isDisabled}
        />
        {isChecked ? checkedIcon : null}
      </div>
      <span className={stateStyleContent}>{content}</span>
    </Label>
  );
};
