import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetSquareIconCheckboxProps } from "./index";

import MetIcon, { Icons } from "../Icon";

interface LabelProps {
  bgColor: string;
  hoverColor: string;
  hoverIconColor: string;
}

const Label = styled.label<LabelProps>`
  background-color: ${(props) => props.bgColor};

  :hover {
    background-color: ${(props) => props.hoverColor};
  }

  input[type="checkbox"] {
    :hover:not(:checked) {
      + svg {
        > * {
          fill: ${(props) => props.hoverIconColor};
        }
      }
    }
  }
`;

export const MetSquareIconCheckbox: FC<MetSquareIconCheckboxProps> = ({
  style,
  className = "",
  isChecked,
  onChange,
  bgColor = colors.transparent,
  isDisabled = false,
  hoverColor = colors.neutral200,
  hoverIconColor = colors.neutral700,
  checkedIcon = Icons.starFilled,
  uncheckedIcon = Icons.starOutlined,
}): ReactElement => {
  const onChangeHandler = (event) => {
    onChange && onChange(event);
  };

  return (
    <Label
      style={style}
      className={`${styles.container} ${className}`}
      hoverColor={hoverColor}
      bgColor={bgColor}
      hoverIconColor={hoverIconColor}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChangeHandler}
        disabled={isDisabled}
      />
      {isChecked ? <MetIcon icon={checkedIcon} size={24} color={colors.accent1}/>
        : <MetIcon icon={uncheckedIcon} size={24} color={colors.neutral600}/>}
    </Label>
  );
};
