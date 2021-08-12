import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetSquareIconCheckboxProps } from "./index";

import uncheckedStarIcon from "../../assets/icons/unchecked-star-icon";
import checkedStarIcon from "../../assets/icons/checked-star-icon";

const Label = styled.label`
    background-color: ${(props) => props.bgColor};
  
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
    className = "",
    isChecked,
    onChange,
    bgColor = colors.transparent,
    isDisabled = false,
    hoverColor = colors.neutral200,
    hoverIconColor = colors.neutral700,
    checkedIcon = checkedStarIcon,
    uncheckedIcon = uncheckedStarIcon,
}): ReactElement => {
    const onChangeHandler = (e) => {
        if (onChange == null) return;
        onChange(e);
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
            {isChecked ? checkedIcon : uncheckedIcon}
        </Label>
    );
};
