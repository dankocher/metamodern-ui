import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetCheckboxProps } from "./index";

import MetIcon, { Icons } from "../Icon";

const classNames = require("classnames");

const Label = styled.label`
  :not(.${styles.disabled}) {
    :hover {
      background-color: ${(props) => props.hoverColor};
    }
    
    div {
      border-color: ${(props) => props.bgColor};
    }
  }
`;

export const MetCheckbox: FC<MetCheckboxProps> = ({
  style,
  className,
  isChecked = false,
  labelFontClass = styles.subtitle3,
  label = "",
  onChange,
  bgColor = colors.neutral800,
  isDisabled = false,
  isHaveLabel = false,
  isRectangleHover = false,
  hoverColor = colors.neutral200,
  checkedIcon = Icons.checkMarkFilled,
}): ReactElement => {
  const onChangeHandler = (event) => {
    onChange && onChange(event);
  };

  const stateStyle = classNames(styles.container, {
    [className]: className,
    [styles.disabled]: isDisabled,
    [styles.container__rounded]: isRectangleHover,
    [styles.container__noLabel]: !isHaveLabel,
  });

  return (
    <Label
      style={style}
      className={stateStyle}
      hoverColor={hoverColor}
      bgColor={bgColor}
      checked={isChecked}
      disabled={isDisabled}
      isHaveLabel={isHaveLabel}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChangeHandler}
        disabled={isDisabled}
      />
      <div className={styles.checkbox}>{isChecked && <MetIcon icon={checkedIcon} size={18} color={isDisabled ? colors.neutral300 : bgColor}/>}</div>
      {isHaveLabel && (
        <span className={`${styles.content} ${labelFontClass}`}>{label}</span>
      )}
    </Label>
  );
};
