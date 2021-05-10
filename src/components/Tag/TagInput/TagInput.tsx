import React, { useState, useRef, useEffect, useCallback } from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";

import { MetTagInputProps } from "./TagInputProps";

import smCheckedIcon from "../../../assets/icons/sm-checked-star-icon.js";
import smUncheckedIcon from "../../../assets/icons/sm-unchecked-star-icon.js";

const classNames = require("classnames");

const Container = styled.div`
    border-color: ${({ isFocused, defaultColor, focusColor }) =>
        isFocused ? focusColor : defaultColor};
`;

export const MetTagInput: React.FC<MetTagInputProps> = ({
    defaultColor = colors.neutral600,
    focusColor = colors.blue,
    checkedIcon = smCheckedIcon,
    uncheckedIcon = smUncheckedIcon,
    isChecked,
    onChange,
    value,
}) => {
    const spanRef = useRef(null);
    // const spanRef = useCallback(null);

    const [inputWidth, setIputWidth] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    // useEffect(() => {
    //     const handleResizeSpan = () => {
    //         console.log("qwe");
    //     };

    //     const span = document.getElementById("qwe");

    //     console.log(span);

    //     span.addEventListener("resize", handleResizeSpan);
    // }, []);

    useEffect(() => {
        const node = spanRef.current;
        const nodeStyle = window.getComputedStyle(node);

        // debugger;

        const spanWidth = node.offsetWidth;
        // nodeStyle.getPropertyValue("blockSize");

        // debugger;

        // const width = parseInt(spanWidth.replace("px", ""));

        setIputWidth(spanWidth + 5);
    }, [value]);

    const openInput = (e) => {
        // console.log(e.target.lastElementChild);

        // debugger;
        e.target.lastElementChild.focus();
    };

    const stateStyle = classNames(styles.container, {
        [styles.focused]: isFocused,
    });

    return (
        <Container
            className={stateStyle}
            defaultColor={defaultColor}
            focusColor={focusColor}
            isFocused={isFocused}
        >
            <div className={styles.container__checkbox}>
                <div className={styles.container__checkbox__hover}>
                    {isChecked ? checkedIcon : uncheckedIcon}
                </div>
            </div>
            <div
                className={styles.container__content}
                onClick={openInput}
                // style={{ width: `${inputWidth + 11}px` }}
            >
                <span
                    ref={spanRef}
                    className={`body1`}
                    // contentEditable={true}
                    // id={"qwe"}
                >
                    {value}
                </span>
                <input
                    style={{ width: inputWidth }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`body1`}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </Container>
    );
};
