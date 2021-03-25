import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

const Label = styled.label`
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }

  input[type="checkbox"] {
    &:hover:not(:checked) {
      & + svg {
        & > * {
          fill: ${(props) => props.hoverIconColor};
        }
      }
    }
  }
`;

export type MetSquareIconCheckboxProps = {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Set an icon when component is checked
   */
  checkedIcon;
  /**
   * Set an icon when component is unchecked
   */
  uncheckedIcon;
  /**
   * Set state when component is checked/unchecked
   */
  isChecked: boolean;
  /**
   * Function for trigger event onChange
   */
  onChange: () => void;
  /**
   * Сhange background color
   */
  bgColor?: string;
  /**
   * Set component disabled
   */
  isDisabled?: boolean;
  /**
   * Сhange background color when component is hovered
   */
  hoverColor?: string;
  /**
   * Сhange icon color when component is hovered
   */
  hoverIconColor?: string;
};

export const MetSquareIconCheckbox: FC<MetSquareIconCheckboxProps> = ({
  style,
  isChecked,
  onChange,
  bgColor = colors.transparent,
  isDisabled = false,
  hoverColor = colors.neutral200,
  hoverIconColor = colors.neutral700,
  checkedIcon,
  uncheckedIcon,
}): ReactElement => {
  return (
    <Label
      style={style}
      className={styles.container}
      hoverColor={hoverColor}
      bgColor={bgColor}
      hoverIconColor={hoverIconColor}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange()}
        disabled={isDisabled}
      />
      {isChecked ? checkedIcon : uncheckedIcon}
    </Label>
  );
};
