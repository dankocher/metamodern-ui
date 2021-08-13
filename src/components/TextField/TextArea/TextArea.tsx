import styles from "./index.module.scss";
import React, { FC, ReactElement, useRef, useState, useEffect } from "react";

import styled from "styled-components";

import { colors } from "../../styles/colors";
import { MetTextAreaProps } from "./TextAreaProps";

import { textFieldState as stateTF } from "../TextFieldState";

const classNames = require("classnames");

const Container = styled.div`
    textarea {
        & + div {
            border-color: ${(props) => props.defaultColor};
        }

        &:focus:not(.${styles.error}, .${styles.success}) + div {
            border-color: ${(props) => props.focusColor};
        }

        &:hover:not(:focus, :disabled, .${styles.error}, .${styles.success})
            + div {
            border-color: ${(props) => props.hoverColor};
        }
    }

    .${styles.error} {
        & + div {
            border-color: ${(props) => props.errorColor};
        }
    }

    .${styles.success} {
        & + div {
            border-color: ${(props) => props.successColor};
        }
    }
`;

export const MetTextArea: FC<MetTextAreaProps> = ({
    style,
    className = "",
    inputFontClass = "",

    onChange = () => {},
    onBlur,
    isDisabled = false,
    defaultValue = "",
    value,
    rowsMins = 1,
    rowsMax,
    state = stateTF.default,

    defaultColor = colors.neutral300,
    hoverColor = colors.neutral600,
    focusColor = colors.blue,
    errorColor = colors.red200,
    successColor = colors.green,
    ...args
}): ReactElement => {
    const textAreaRef = useRef(null);
    const [textAreaHeight, setTextAreaHeight] = useState("auto");
    const [isSizeFixed, setIsSizeFixed] = useState(false);

    useEffect(() => {
        if (defaultValue === value) return;
        setTextAreaHeight("auto");
    }, [defaultValue]);

    useEffect(() => {
        const node = textAreaRef.current;
        const scrollHeight = node.scrollHeight;
        const nodeStyle = window.getComputedStyle(node);

        // get padding of textAret in numbers
        const padding = parseInt(
            nodeStyle.getPropertyValue("padding").replace("px", "")
        );

        // get lineHeight of textAret in numbers
        const lineHeight = parseInt(
            nodeStyle.getPropertyValue("line-height").replace("px", "")
        );

        // if maxRow >= rows
        if (
            !isNaN(lineHeight) &&
            rowsMax != null &&
            (scrollHeight - padding * 2) / lineHeight >= rowsMax
        ) {
            setIsSizeFixed(true);
            setTextAreaHeight(`${padding * 2 + lineHeight * rowsMax}px`);
        } else {
            setIsSizeFixed(false);
            setTextAreaHeight(`${scrollHeight}px`);
        }
    }, [value]);

    const onChangeHandler = (event) => {
        setTextAreaHeight("auto");

        onChange(event);
    };

    const stateStyle = classNames({
        [styles.error]: state === stateTF.error,
        [styles.success]: state === stateTF.success,
    });

    return (
        <Container
            className={`${styles.container} ${className}`}
            defaultColor={defaultColor}
            hoverColor={hoverColor}
            focusColor={focusColor}
            errorColor={errorColor}
            successColor={successColor}
            style={{
                height: textAreaHeight,
            }}
        >
            <textarea
                {...args}
                ref={textAreaRef}
                rows={rowsMins}
                style={{
                    overflow: isSizeFixed ? "overlay" : "hidden",
                }}
                value={value}
                disabled={isDisabled}
                className={`${stateStyle} ${inputFontClass}`}
                onChange={onChangeHandler}
                onBlur={onBlur}
            />
            <div className={styles.container__outline} />
        </Container>
    );
};
