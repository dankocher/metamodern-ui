import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  &:hover {
    background-color: ${(props) => props.hoverColor} !important;
  }
`;

export type MetSquareIconCheckboxProps = {
  style?: object;
  isChecked: boolean;
  onChange: () => void;
  isDisabled?: boolean;
  hoverColor?: string;
  checkedIcon;
  uncheckedIcon;
};

const MetSquareIconCheckbox: FC<MetSquareIconCheckboxProps> = ({
  style,
  isChecked,
  onChange,
  isDisabled = false,
  hoverColor,
  checkedIcon,
  uncheckedIcon,
}): ReactElement => {
  return (
    <Label style={style} className={styles.container} hoverColor={hoverColor}>
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

export default MetSquareIconCheckbox;
