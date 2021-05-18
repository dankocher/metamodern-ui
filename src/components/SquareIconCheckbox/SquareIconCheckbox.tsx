import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetSquareIconCheckboxProps } from "./index";

import uncheckedStarIcon from "../../assets/icons/unchecked-star-icon.js";
import checkedStarIcon from "../../assets/icons/checked-star-icon.js";

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

export const MetSquareIconCheckbox: FC<MetSquareIconCheckboxProps> = ({
    style,
    isChecked,
    onChange,
    bgColor = colors.transparent,
    isDisabled = false,
    hoverColor = colors.neutral200,
    hoverIconColor = colors.neutral700,
    checkedIcon = checkedStarIcon,
    uncheckedIcon = uncheckedStarIcon,
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
