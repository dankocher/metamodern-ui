import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";

const Span = styled.span`
  &::after {
    background-color: ${(props) => props.thumbColor} !important;
  }
  &::before {
    background-color: ${(props) => props.hoverColor} !important;
  }
`;

export type ToggleProps = {
  styles?: object;
  isChecked: boolean;
  onChange: () => void;
  isDisabled?: boolean;
  trackColor?: string;
  thumbColor?: string;
  hoverColor?: string;
};

const Toggle: FC<ToggleProps> = ({
  isChecked,
  onChange,
  isDisabled = false,
  trackColor,
  thumbColor,
  hoverColor,
}): ReactElement => {
  return (
    <label className={styles.toggleSwitch}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange()}
        disabled={isDisabled}
      />
      <Span
        thumbColor={thumbColor}
        hoverColor={hoverColor}
        className={styles.switch}
        style={{ backgroundColor: trackColor }}
      />
    </label>
  );
};

export default Toggle;
