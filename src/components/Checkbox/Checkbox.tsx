import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetCheckboxProps } from "./index";

import MetIcon from "../Icon";

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
  isChecked = false,
  labelFontClass = "",
  label = "",
  onChange,
  borderColor = colors.neutral700,
  bgColor = colors.neutral800,
  isDisabled = false,
  isHaveLabel = false,
  isRectangleHover = false,
  hoverColor = colors.neutral200,
  checkedIcon = "checkOutlined",
}): ReactElement => {
  const onChangeHandler = (event) => {
    onChange && onChange(event);
  };

  const stateStyle = classNames(`${styles.container} ${className}`, {
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
      borderColor={borderColor}
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
      <div className={styles.checkbox}>{isChecked && <MetIcon icon={checkedIcon} size={18} color={colors.neutral0}/>}</div>
      {isHaveLabel && (
        <span className={`${styles.content} ${labelFontClass}`}>{label}</span>
      )}
    </Label>
  );
};
