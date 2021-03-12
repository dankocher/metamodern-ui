import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

const Label = styled.label`
  &:hover {
    background-color: ${(props) => props.hoverColor} !important;
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
};

export const MetSquareIconCheckbox: FC<MetSquareIconCheckboxProps> = ({
  style,
  isChecked,
  onChange,
  bgColor = colors.transparent,
  isDisabled = false,
  hoverColor = colors.neutral200,
  checkedIcon,
  uncheckedIcon,
}): ReactElement => {
  return (
    <Label
      style={style}
      className={styles.container}
      hoverColor={hoverColor}
      bgColor={bgColor}
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
