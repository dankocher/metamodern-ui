import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";

const Span = styled.span`
  &::after {
    background-color: ${(props) => props.thumbOffColor} !important;
  }
  &::before {
    background-color: ${(props) => props.hoverColor} !important;
  }
`;

const Input = styled.input`
&:checked {
  & + .${styles.switch}::after { 
    background-color: ${(props) => props.thumbOnColor} !important;
  }
`;

export type ToggleProps = {
  style?: object;
  isChecked: boolean;
  onChange: () => void;
  isDisabled?: boolean;
  trackColor?: string;
  thumbOffColor?: string;
  thumbOnColor?: string;
  hoverColor?: string;
};

const Toggle: FC<ToggleProps> = ({
  style,
  isChecked,
  onChange,
  isDisabled = false,
  trackColor,
  thumbOffColor,
  thumbOnColor,
  hoverColor,
}): ReactElement => {
  return (
    <label style={style} className={styles.toggleSwitch}>
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange()}
        disabled={isDisabled}
        thumbOnColor={thumbOnColor}
      />
      <Span
        thumbOffColor={thumbOffColor}
        hoverColor={hoverColor}
        className={styles.switch}
        style={{ backgroundColor: trackColor }}
      />
    </label>
  );
};

export default Toggle;
