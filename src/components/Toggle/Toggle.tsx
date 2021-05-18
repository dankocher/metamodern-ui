import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetToggleProps } from "./index";

const Span = styled.span`
    &::after {
        background-color: ${(props) => props.thumbOffColor};
        box-shadow: ${(props) => props.shadow};
    }
    &::before {
        background-color: ${(props) => props.hoverColor};
    }
`;

const Input = styled.input`
&:checked {
  & + .${styles.switch}::after { 
    background-color: ${(props) => props.thumbOnColor};
  }
`;

export const MetToggle: FC<MetToggleProps> = ({
    style,
    isChecked,
    onChange,
    isDisabled = false,
    trackColor = colors.neutral600,
    thumbOffColor = colors.neutral900,
    thumbOnColor = colors.neutral50,
    hoverColor = colors.neutral800,
    shadow = "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2)",
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
                shadow={shadow}
                thumbOffColor={thumbOffColor}
                hoverColor={hoverColor}
                className={styles.switch}
                style={{ backgroundColor: trackColor }}
            />
        </label>
    );
};
