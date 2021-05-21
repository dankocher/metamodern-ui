import React, { useState } from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";

import { MetTagInputProps } from "./index";

import smCheckedIcon from "../../../assets/icons/sm-checked-star-icon.js";
import smUncheckedIcon from "../../../assets/icons/sm-unchecked-star-icon.js";

import { MetCircleIconBtn, Size } from "../../CircleIconBtn";

const classNames = require("classnames");

const Container = styled.div`
    border-color: ${({ isFocused, defaultColor, focusColor }) =>
        isFocused ? focusColor : defaultColor};

    input {
        color: ${({ isFocused, defaultColor, hoverFontColor }) =>
            isFocused ? hoverFontColor : defaultColor};
    }

    &:hover {
        input {
            color: ${({ hoverFontColor }) => hoverFontColor};
        }
    }

    .${styles.container__checkbox}:hover {
        .${styles.container__checkbox__hover} {
            background-color: ${({ hoverCheckboxColor }) => hoverCheckboxColor};
        }
    }
`;

export const MetTagInput: React.FC<MetTagInputProps> = ({
    style,
    className = "",
    fontClass = "",

    hoverFontColor = colors.neutral700,
    hoverCheckboxColor = colors.neutral200,
    defaultColor = colors.neutral600,
    focusColor = colors.blue,
    checkedIcon = smCheckedIcon,
    uncheckedIcon = smUncheckedIcon,
    onChange,
    onBlur,
    isHasCheckbox = true,
    onToggle,
    isChecked,

    value,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const toggle = () => {
        if (onToggle == null) return;
        onToggle();
    };

    const onBlurHandler = (event) => {
        setIsFocused(false);

        if (onBlur == null) return;
        onBlur(event);
    };

    const openInput = (e) => {
        if (e.target.lastElementChild == null) return;
        e.target.lastElementChild.focus();
    };

    const stateStyle = classNames(styles.container, {
        [styles.focused__withCB]: isFocused && isHasCheckbox,
        [styles.focused__withoutCB]: isFocused && !isHasCheckbox,
        [styles.unfocused__withoutCB]: !isFocused && !isHasCheckbox,
    });

    return (
        <Container
            style={style}
            className={`${stateStyle} ${className}`}
            hoverFontColor={hoverFontColor}
            defaultColor={defaultColor}
            hoverCheckboxColor={hoverCheckboxColor}
            focusColor={focusColor}
            isFocused={isFocused}
        >
            {isHasCheckbox ? (
                <div className={styles.container__checkbox} onClick={toggle}>
                    <div className={styles.container__checkbox__hover}>
                        {isChecked ? checkedIcon : uncheckedIcon}
                    </div>
                </div>
            ) : null}

            <div className={styles.container__content} onClick={openInput}>
                <span className={fontClass}>{value}</span>
                <input
                    onFocus={() => setIsFocused(true)}
                    className={fontClass}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlurHandler}
                />
            </div>
            <div className={styles.container__close}>
                <MetCircleIconBtn onClick={() => {}} size={Size.sm} />
            </div>
        </Container>
    );
};
